import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
import MyCkeditor from "./MyCkeditor";

const CreateArticleView = ({ getStatePost }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [snippet, setSnippet] = useState("");

  const submitPost = async () => {
    const post = { title, body, snippet };
    const response = await fetch("/api/blogs/save", {
      method: "post",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    const result = json || {};
    navigate("/");
  };

  return (
    <main className="mb-4">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <p>Just type down the article content.</p>
            <div className="my-5">
              <div className="form-floating">
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                  value={title}
                  onBlur={(e) => {
                    setTitle(e.target.value);
                  }}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <label htmlFor="title">Title</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A title is required.
                </div>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  id="snippet"
                  type="text"
                  placeholder="Enter your snippet here..."
                  data-sb-validations="required,email"
                  value={snippet}
                  onBlur={(e) => {
                    setSnippet(e.target.value);
                  }}
                  onChange={(e) => {
                    setSnippet(e.target.value);
                  }}
                />
                <label htmlFor="snippet">Snippet</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="snippet:required"
                >
                  A snippet is required.
                </div>
              </div>
              <div className="mt-5">
                <MyCkeditor
                  getPostData={(value) => {
                    setBody(value);
                  }}
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="body:required"
                >
                  A body is required.
                </div>
              </div>
              <br />
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              <button
                className="btn btn-primary text-uppercase"
                id="submitButton"
                type="submit"
                onClick={submitPost}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateArticleView;
