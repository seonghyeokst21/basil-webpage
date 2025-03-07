const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// ✅ 환경 변수에서 API Key 및 데이터베이스 ID 가져오기
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_IDS = {
    news: process.env.NEWS_DATABASE_ID,
    people: process.env.PEOPLE_DATABASE_ID,
    projects: process.env.PROJECTS_DATABASE_ID,
    publications: process.env.PUBLICATIONS_DATABASE_ID
};

// ✅ API Key 및 데이터베이스 ID 확인 로그
console.log("🔑 NOTION_API_KEY:", NOTION_API_KEY ? "✅ 설정됨" : "❌ API Key 없음!");
console.log("🗂 DATABASE_IDS:", DATABASE_IDS);

if (!NOTION_API_KEY) {
    console.error("🚨 Notion API Key가 설정되지 않았습니다! `.env` 파일을 확인하세요.");
    process.exit(1);
}

// ------------------ 캐시 관련 변수 ------------------
let cachedNotionData = null;
let lastFetchedTime = null;
const CACHE_DURATION = 60000; // 캐시 유효기간: 60초

// ✅ 페이지네이션을 사용해 모든 데이터 가져오기
const fetchPaginatedNotionData = async (databaseId) => {
    let allPages = [];
    let hasMore = true;
    let nextCursor = undefined;

    while (hasMore) {
        try {
            const response = await axios.post(
                `https://api.notion.com/v1/databases/${databaseId}/query`,
                { start_cursor: nextCursor },
                {
                    headers: {
                        Authorization: `Bearer ${NOTION_API_KEY}`,
                        "Notion-Version": "2022-06-28",
                        "Content-Type": "application/json",
                    },
                }
            );

            allPages = [...allPages, ...response.data.results];
            hasMore = response.data.has_more;
            nextCursor = response.data.next_cursor;
        } catch (error) {
            console.error(`🚨 Notion API 요청 실패 (DB: ${databaseId}):`, error.response?.data || error.message);
            break;
        }
    }
    return allPages;
};

// ✅ 모든 데이터 가져오기
const fetchAllNotionData = async () => {
    try {
        const requests = Object.entries(DATABASE_IDS).map(async ([category, dbId]) => {
            if (!dbId) {
                console.warn(`⚠️ ${category} 데이터베이스 ID가 설정되지 않았습니다.`);
                return { category, data: [] };
            }
            const data = await fetchPaginatedNotionData(dbId);
            return { category, data };
        });

        const results = await Promise.all(requests);

        // ✅ 데이터 변환 함수
        const formatNewsData = (pages) =>
            pages.map((page) => ({
                id: page.id,
                title: page.properties?.title?.rich_text?.[0]?.text?.content || "제목 없음",
                summary: page.properties?.summary?.rich_text?.[0]?.text?.content || "설명 없음",
                image: page.properties?.["thumbnail image"]?.files?.[0]?.file?.url || "",
                content: page.properties?.content?.rich_text?.map((t) => t.text.content) || [],
                url: page.url || "",
            }));

        const formatPeopleData = (pages) => {
            console.log("🔍 Notion API 응답 데이터:", JSON.stringify(pages, null, 2));
            return pages.map((page) => {
                let imageUrl = "";

                if (page.properties?.["people image"]?.files?.length > 0) {
                    console.log("✅ Files 속성 확인:", page.properties["people image"].files);
                    imageUrl = page.properties["people image"].files[0].file?.url || "";
                } else if (page.properties?.["people image"]?.people?.length > 0) {
                    console.log("✅ People 속성 확인:", page.properties["people image"].people);
                    imageUrl = page.properties["people image"].people[0]?.avatar_url || "";
                } else {
                    console.log("⚠️ 이미지 없음:", page.properties["people image"]);
                }

                return {
                    id: page.id,
                    name: page.properties?.name?.rich_text?.[0]?.text?.content || "이름 없음",
                    email: page.properties?.email?.rich_text?.[0]?.text?.content || "이메일 없음",
                    introduce: page.properties?.introduce?.rich_text?.[0]?.text?.content || "소개 없음",
                    laboratory: page.properties?.laboratory?.rich_text?.[0]?.text?.content || "연구실 없음",
                    image: imageUrl || "https://your-default-image-url.com/default.png",
                };
            });
        };

        const formatProjectsData = (pages) =>
            pages.map((page) => ({
                id: page.id,
                title: page.properties?.title?.rich_text?.[0]?.text?.content || "제목 없음",
                content: page.properties?.content?.rich_text?.[0]?.text?.content || "설명 없음",
                progress: page.properties?.["current progress"]?.select?.name || "진행 상태 없음",
            }));

        const formatPublicationsData = (pages) =>
            pages.map((page) => ({
                id: page.id,
                title: page.properties?.title?.rich_text?.[0]?.text?.content || "제목 없음",
                authors: page.properties?.authors?.rich_text?.map((a) => a.text.content).join(", ") || "저자 없음",
                journal: page.properties?.journal?.rich_text?.[0]?.text?.content || "저널 없음",
                year: page.properties?.year?.rich_text?.[0]?.text?.content || "연도 없음",
                url: page.properties?.URL?.url || "URL 없음",
            }));

        // ✅ 변환된 데이터 적용
        const formattedData = results.reduce((acc, { category, data }) => {
            if (category === "news") acc.news = formatNewsData(data);
            else if (category === "people") acc.people = formatPeopleData(data);
            else if (category === "projects") acc.projects = formatProjectsData(data);
            else if (category === "publications") acc.publications = formatPublicationsData(data);
            return acc;
        }, { news: [], people: [], projects: [], publications: [] });

        console.log("✅ 백엔드에서 최종 변환된 데이터:", formattedData);
        return formattedData;
    } catch (error) {
        console.error("🚨 전체 Notion API 요청 실패:", error.response?.data || error.message);
        return { news: [], people: [], projects: [], publications: [] };
    }
};

const fetchNewsContent = async (pageId) => {
    try {
        console.log(`🔍 Fetching Notion page content for ID: ${pageId}`);

        const response = await axios.get(`https://api.notion.com/v1/blocks/${pageId}/children`, {
            headers: {
                Authorization: `Bearer ${NOTION_API_KEY}`,
                "Notion-Version": "2022-06-28",
            },
        });

        console.log("🔍 Notion API Response:", JSON.stringify(response.data, null, 2));

        return response.data.results
            .map((block) => {
                if (block.type === "paragraph") {
                    return block.paragraph.rich_text && block.paragraph.rich_text.length > 0
                        ? block.paragraph.rich_text.map(t => t.text.content).join(" ")
                        : "";
                }
                if (block.type === "image") {
                    return `<img src="${block.image.file.url}" alt="Notion Image" style="max-width:100%;" />`;
                }
                return "";
            })
            .filter(text => text !== "")
            .join("<br/>");

    } catch (error) {
        console.error("🚨 Notion 본문 가져오기 실패:", error.response?.data || error.message);
        return "내용을 불러오는 데 실패했습니다.";
    }
};

// ✅ 개별 뉴스의 Notion 페이지 URL 반환 API
app.get("/api/news/:id", async (req, res) => {
    const { id } = req.params;
    const pageUrl = await fetchNewsPageUrl(id);
    res.json({ url: pageUrl });
});

// ✅ 개별 뉴스 본문 가져오는 API 추가
app.get("/api/news/content/:id", async (req, res) => {
    const { id } = req.params;
    const content = await fetchNewsContent(id);
    res.json({ content });
});

// ✅ API 엔드포인트 `/api/all` - 캐시 적용
app.get("/api/all", async (req, res) => {
    if (cachedNotionData && Date.now() - lastFetchedTime < CACHE_DURATION) {
        console.log("캐시된 Notion 데이터를 반환합니다.");
        return res.json(cachedNotionData);
    }
    
    const notionData = await fetchAllNotionData();
    cachedNotionData = notionData;
    lastFetchedTime = Date.now();
    res.json(notionData);
});

// ✅ 백엔드 실행
app.listen(PORT, () => {
    console.log(`🚀 백엔드 서버가 http://localhost:${PORT} 에서 실행 중`);
});
