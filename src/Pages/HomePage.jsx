import React, { useEffect, useState } from "react";
import NewsArticle from "../Components/NewsArticle";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      let q = searchParams.get("q") ?? "india";
      let language = searchParams.get("language") ?? "hi";

      let response = await fetch(
        `https://gnews.io/api/v4/search?q=${q}&lang=${language}&sortby=publishedAt&apikey=ad85b31d05f5f2181db3f95f52277434`,
      );
      response = await response.json();
      console.log(response);
      if (response.articles) {
        setArticles(response.articles);
        setTotalResults(response.totalArticles);
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
                pic={item.image}
                date={item.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
