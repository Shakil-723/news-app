import React, { useEffect, useState } from "react";
import NewsArticle from "../Components/NewsArticle";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      let q = searchParams.get("q") ?? "All";
      let language = searchParams.get("language") ?? "hi";

      let response = await fetch(
        `https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=publishedAt&apiKey=041d31fe69dd4d61953d2da0e7263b9a`,
      );
      response = await response.json();
      console.log(response);
      if (response.status === "ok") {
        setArticles(response.articles);
        setTotalResults(response.totalResults);
      }
    })();
  }, [searchParams]); // ✅ re-fetches when q or language changes<h5 className="text-center text-light p-2 mt-1" style={{backgroundColor: "#ff6600"}}>

  return (
    <>
      <div className="container-fluid">
        <h5
          className="text-center text-light p-2 mt-1"
          style={{ backgroundColor: "#ff6600" }}
        >
          {searchParams.get("q") ?? "All"} Articles
        </h5>
        <div className="row">
          {articles.map((item, index) => {
            return (
              <NewsArticle
                key={index}
                source={item.source.name}
                title={item.title}
                description={item.description}
                url={item.url}
                pic={item.urlToImage}
                date={item.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
