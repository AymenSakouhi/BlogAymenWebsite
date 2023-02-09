import { Blog } from "../models/blog.js";
import * as fs from "fs";

const getOneBlog = (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => res.status(404).json({ error: e }));
};

const getBlogs = (req, res) => {
  Blog.find()
    .sort({ createDeflate: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => res.status(404).json({ error: e }));
};

const postBlog = (req, res) => {
  console.log(req.body);
  const { title, body, snippet } = req.body;
  const post = new Blog({ title, body, snippet });
  post
    .save()
    .then((result) => {
      res.status(200).json({ sucess: result._id });
    })
    .catch((e) => {
      res.status(404).json({ error: e });
      console.log(e);
    });
};

const deleteBlog = (req, res) => {
  const { id } = req.params;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ sucess: `Deleted the blog by id : ${id}` });
      } else {
        res
          .status(404)
          .json({ "Not Found": `Post by id= ${id} Not found`, id: id });
      }
    })
    .catch((e) => {
      res.status(404).json({ error: e });
    });
};

const updateBlog = (req, res) => {
  const { id } = req.params;
  const { newTitle, newBody, newSnippet } = req.body;

  Blog.findByIdAndUpdate(id, {
    title: newTitle,
    body: newBody,
    snippet: newSnippet,
  })
    .then(() => {
      Blog.findById(id).then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res
            .status(404)
            .json({ "Not Found": `Post by id= ${id} Not found`, id: id });
        }
      });
    })
    .catch((e) => {
      res.status(404).json({ error: e });
    });
};

import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadAsset = (req, res) => {
  let tempFile = req.files.upload;
  let TempPathFile = tempFile.path;
  const targetPathUrl = path.join(__dirname, "./assets/images" + tempFile.name);
  // let path = tempFile.path.replaceAll(`\\`, "/");
  let fileName = TempPathFile.split("\\").pop();
  //https://www.youtube.com/watch?v=x9X3ag5F8tw&ab_channel=codeaxen
  //to rewatch
  if (
    path.extname(tempFile.originalFilename).toLocaleLowerCase === ".png" ||
    ".jpg"
  ) {
    fs.rename(TempPathFile, targetPathUrl, (err) => {
      res.status(200).json({
        uploaded: 1,
        fileName: tempFile.name,
        url: `http://localhost:8000/${fileName}`,
      });

      if (err) {
        return console.log(err);
      }
    });
  }
};

export { deleteBlog, getBlogs, postBlog, updateBlog, getOneBlog, uploadAsset };
