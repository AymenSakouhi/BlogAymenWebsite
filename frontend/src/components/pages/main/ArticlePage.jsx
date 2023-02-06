import React from "react";
import Footer from "../../shared/Footer";
import HeaderArticle from "../../shared/HeaderArticle";
import Navigation from "../../shared/Navigation";
import ArticleView from "../feature/ArticleView";

const ArticlePage = () => {
  return (
    <>
      <Navigation />
      <HeaderArticle />
      <ArticleView />
      <Footer />
    </>
  );
};

export default ArticlePage;
