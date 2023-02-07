import React, { useState } from "react";
// import Editor from "../../../../ckeditor5/src/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MyCkeditor = ({ getPostData }) => {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Write here</p>"
        config={{
          ckfinder: {
            uploadUrl: "/api/blogs/upload",
          },
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          getPostData(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </>
  );
};

export default MyCkeditor;
