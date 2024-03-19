import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ReadBlog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/blogs/${id}`)
      .then((response) => {
        setBlog(response.data.blog);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold mb-3 mt-5">{blog.title}</h2>
      <p className="text-xl mx-3">{blog.body}</p>
      <Link to={`/blogs/edit/${id}`}>
        <FaEdit className="absolute top-[1px] right-[50px] size-7 hover:opacity-75 cursor-pointer" />
      </Link>
      <Link to={`/blogs/delete/${id}`}>
        <MdDelete className="absolute top-[1px] right-[10px] size-7 hover:opacity-75 cursor-pointer" />
      </Link>
    </div>
  );
};

export default ReadBlog;
