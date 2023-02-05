import { useEffect, useState } from "react";

//eslint-disable-next-line no-unused-vars
const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("unloaded");
  const getBlogs = async () => {
    setStatus("loading");
    const response = await fetch("/api/blogs", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    const result = json || [];
    if (result.length) {
      setBlogs(result);
      setStatus("loaded");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return [status, blogs];
};

export default useBlogs;
