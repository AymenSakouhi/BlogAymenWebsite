import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import ContactView from "../feature/ContactView";
import Header from "../../shared/Header";

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <Header
        imageBackground={"/img/contact-bg.jpg"}
        title={"Contact Me"}
        subHeading={"Have questions? I have answers."}
      />
      <ContactView />
      <Footer />
    </>
  );
};

export default ContactPage;
