import express from "express";
import "dotenv/config";
import morgan from "morgan";
import bodyParser from "body-parser";

import { connectToDb } from "./db.js";
import blogRoutes from "../routes/blogRoutes.js";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./assets/images"));
app.use("/api/blogs/", blogRoutes);

const PORT = process.env.PORT || 3000;

connectToDb(() => {
  console.log("Trying to connect to database");
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
