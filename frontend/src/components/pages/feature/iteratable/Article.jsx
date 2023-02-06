import React from "react";
import { Link } from "react-router-dom";

const Article = ({ _id, title, snippet, createdAt }) => {
  const convertEpochToSpecificTimezone = (timeEpoch, offset) => {
    var d = new Date(timeEpoch);
    var utc = d.getTime() + d.getTimezoneOffset() * 60000; //This converts to UTC 00:00
    var nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString();
  };
  return (
    <>
      <div className="post-preview">
        <Link to={`/article/${_id}`}>
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{snippet}</h3>
        </Link>
        <p className="post-meta">
          Posted by Aymen Sakouhi on{" "}
          {convertEpochToSpecificTimezone(createdAt, +3)}
        </p>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Article;
