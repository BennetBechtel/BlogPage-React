import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogSnippet, setBlogSnippet] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newBlog = {
      title: blogTitle,
      snippet: blogSnippet,
      body: blogBody,
    };
    axios
      .post("http://localhost:5555/blogs", newBlog)
      .then(() => {
        navigate("/blogs");
      })
      .catch((error) => {
        alert("An error happened. Please try again");
        console.log(error);
      });
  };

  return (
    <div className="mt-10">
      <div className="max-w-[400px] mx-auto flex flex-col">
        <label htmlFor="blog-title" className="blogLabel">
          Blog title:
        </label>
        <input
          type="text"
          name="blog-title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="blogInput"
        />
        <label htmlFor="blog-snippet" className="blogLabel">
          Blog snippet:
        </label>
        <input
          type="text"
          name="blog-snippet"
          value={blogSnippet}
          onChange={(e) => setBlogSnippet(e.target.value)}
          className="blogInput"
        />
        <label htmlFor="blog-body" className="blogLabel">
          Blog body
        </label>
        <textarea
          name="blog-body"
          value={blogBody}
          onChange={(e) => setBlogBody(e.target.value)}
          className="blogInput h-[150px] resize-none"
        ></textarea>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-red-800 p-2 text-xl text-white font-medium rounded-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
