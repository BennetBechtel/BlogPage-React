import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/api/blogs")
      .then((response) => {
        setBlogs(response.data.blogs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-3 mt-5">All Blogs</h2>
      {blogs.map((blog) => {
        return (
          <div className="ml-3 mb-4" key={blog._id}>
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="my-1">{blog.snippet}</p>
            <Link to={`/blogs/read/${blog._id}`}>
              <p className="text-zinc-600">Read blog...</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Home;
