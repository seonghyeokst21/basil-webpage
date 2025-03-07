import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// ✅ Context 생성 (기본값을 `{}`으로 설정)
const NotionContext = createContext({});

// ✅ Context Provider 정의
export const NotionProvider = ({ children }) => {
  const [notionData, setNotionData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notion-page/news_1");

        // ❗ API 응답이 비어 있을 경우 예외 처리
        if (!response.data) {
          throw new Error("❌ Notion API 응답이 비어 있습니다.");
        }

        setNotionData(response.data);
      } catch (error) {
        console.error("🚨 Error fetching Notion page:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <NotionContext.Provider value={{ notionData, loading }}>
      {loading ? <p>Loading...</p> : children} {/* ❗ 로딩 중 메시지 표시 */}
    </NotionContext.Provider>
  );
};

// ✅ Notion 데이터를 사용하는 Hook 생성
export const useNotion = () => useContext(NotionContext);
