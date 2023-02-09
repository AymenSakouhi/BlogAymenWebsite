import express from "express";
import multiParty from "connect-multiparty";
const MultipartyMiddleware = multiParty({
  uploadDir: "./assets/images",
});

import {
  updateBlog,
  deleteBlog,
  postBlog,
  getBlogs,
  getOneBlog,
  uploadAsset,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/article/:id", getOneBlog);
router.post("/save", postBlog);
router.put("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);
router.post("/upload", MultipartyMiddleware, uploadAsset);

export default router;
