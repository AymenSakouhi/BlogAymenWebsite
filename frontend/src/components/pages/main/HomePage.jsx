import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import BlogsView from "../feature/BlogsView";
import Header from "../../shared/Header";

import useBlogs from "../../../hooks/useBlogs";

const HomePage = () => {
  const [status, blogs] = useBlogs(); //eslint-disable-line no-unused-vars

  return (
    <>
      <Navigation />
      <Header
        imageBackground={"/img/home-bg.jpg"}
        title={"Aymen Sakouhi"}
        subHeading={"Blog by a Front-end Developer"}
      />
      {blogs.length ? (
        <BlogsView blogs={blogs} />
      ) : (
        <h2 className="text-center">Sorry... No blogs for now</h2>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
