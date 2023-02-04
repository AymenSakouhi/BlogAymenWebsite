import { Blog } from "../models/blog.js";

const getBlogs = (req, res) => {
  Blog.find()
    .sort({ createDeflate: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => res.status(404).json({ error: e }));
};

const postBlog = (req, res) => {
  const { title, body, snippet } = req.body;
  const post = new Blog({ title, body, snippet });
  post
    .save()
    .then((result) => {
      res.status(200).json({ sucess: result._id });
    })
    .catch((e) => res.status(404).json({ error: e }));
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

export { deleteBlog, getBlogs, postBlog, updateBlog };
