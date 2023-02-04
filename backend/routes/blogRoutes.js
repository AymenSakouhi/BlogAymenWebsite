import express from "express";

import {
  updateBlog,
  deleteBlog,
  postBlog,
  getBlogs,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/save", postBlog);
router.put("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);

export default router;
