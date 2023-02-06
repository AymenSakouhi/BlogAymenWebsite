import React from "react";
import Article from "./iteratable/Article";

const BlogsView = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {blogs.map((post, index) => (
            <Article
              key={post._id}
              title={post.title}
              snippet={post.snippet}
              createdAt={post.createdAt}
              _id={post._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsView;
