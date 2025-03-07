import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const NotionTable = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true); // ❗ 로딩 상태 추가

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notion-data");

        // ❗ API 응답이 비어있을 경우 대비
        if (!response.data || !response.data.results) {
          throw new Error("❌ Notion API 응답이 올바르지 않습니다.");
        }

        setPages(response.data.results);
      } catch (error) {
        console.error("🚨 Error fetching Notion data:", error);
      } finally {
        setLoading(false); // ❗ 로딩 상태 업데이트
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>Notion Data</h2>
      {loading ? (
        <p>Loading...</p> // ❗ 데이터 로딩 중일 때 표시
      ) : (
        <ul>
          {pages.length > 0 ? (
            pages.map((page) => (
              <li key={page.id}>
                {page.properties?.["Name"]?.title?.[0]?.text?.content || "No title"}
              </li>
            ))
          ) : (
            <p>데이터가 없습니다.</p> // ❗ 데이터가 없을 경우 처리
          )}
        </ul>
      )}
    </div>
  );
};

export default NotionTable;
