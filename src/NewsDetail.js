import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./NewsDetail.css";

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState({ title: "", content: "" });

    useEffect(() => {
        fetch(`http://localhost:5000/api/news/content/${id}`)
            .then(response => response.json())
            .then(data => setNews({ title: data.title, content: data.content }))
            .catch(error => console.error("Error fetching news content:", error));
    }, [id]);

    return (
        <div className="news-detail-container">
            <h2>{news.title}</h2>
            <div className="news-detail-content" dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>
    );
};

export default NewsDetail;
