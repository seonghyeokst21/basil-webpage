import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // 환경 변수 로드

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// ❗ 환경 변수 확인 후 에러 처리 추가
if (!NOTION_API_KEY || !DATABASE_ID) {
  throw new Error("❌ 환경 변수가 설정되지 않았습니다. .env 파일을 확인하세요.");
}

export const fetchNotionData = async () => {
  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
      }
    );

    // ❗ Notion 응답이 비정상적인 경우 처리
    if (!response.data.results) {
      throw new Error("❌ Notion API 응답이 예상과 다릅니다.");
    }

    return response.data.results;
  } catch (error) {
    console.error('❌ Notion API Error:', error.response?.data || error.message);
    return []; // ❗ 오류 발생 시 빈 배열 반환
  }
};
