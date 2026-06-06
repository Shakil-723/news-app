import React from "react";

export default function NewsArticle(props) {
  return (
    <div className="col-x1-2 col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <img src={props.pic} height={200} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-source">
            <p>{props.source}</p>
            <p>{new Date(props.date).toLocaleDateString()}</p>
          </div>
          <p className="card-text">{props.description}</p>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary w-100"
          >
            Read full Article
          </a>
        </div>
      </div>
    </div>
  );
}
