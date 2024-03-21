import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const DeleteBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    axios
      .delete(`/api/blogs/${id}`)
      .then(() => navigate("/blogs"))
      .catch((error) => {
        alert("An error happened. Please try again");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <Link to={`/blogs/read/${id}`}>
        <IoMdArrowRoundBack className="size-11 mr-2" />
      </Link>
      <div className="flex flex-col items-center border-2 border-black rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this blog?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBlog;
