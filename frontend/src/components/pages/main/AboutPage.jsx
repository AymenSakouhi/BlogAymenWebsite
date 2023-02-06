import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import AboutView from "../feature/AboutView";
import Header from "../../shared/Header";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <Header
        imageBackground={"/img/about-bg.jpg"}
        title={"About Me"}
        subHeading={"This is what I do."}
      />
      <AboutView />
      <Footer />
    </>
  );
};

export default AboutPage;
