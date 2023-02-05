import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import BlogsView from "../feature/BlogsView";
import Header from "../feature/Header";

import useBlogs from "../../../hooks/useBlogs";

const HomePage = () => {
  const [status, blogs] = useBlogs();

  console.log(status, blogs);

  return (
    <>
      <Navigation />
      <Header />
      <BlogsView />
      <Footer />
    </>
  );
};

export default HomePage;
