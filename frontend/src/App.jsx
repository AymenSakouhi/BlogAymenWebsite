import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/main/AboutPage";
import ArticlePage from "./components/pages/main/ArticlePage";
import ContactPage from "./components/pages/main/ContactPage";
import CreateArticlePage from "./components/pages/main/CreateArticlePage";
import HomePage from "./components/pages/main/HomePage";
import NotFound from "./components/pages/main/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/article/:id" element={<ArticlePage />}></Route>
          <Route path="/create" element={<CreateArticlePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
