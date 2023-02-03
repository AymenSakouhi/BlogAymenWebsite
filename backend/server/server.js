import express from "express";
import "dotenv/config";
import morgan from "morgan";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";

import { connectToDb } from "./db.js";
import { Blog } from "../models/blog.js";
import { createDeflate } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.get("/api/blogs", (req, res) => {
  Blog.find()
    .sort({ createDeflate: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => res.status(404).json({ hello: e }));
});

connectToDb(() => {
  console.log("Trying to connect to database");
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
