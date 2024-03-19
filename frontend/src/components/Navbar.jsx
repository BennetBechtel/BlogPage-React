import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/blogs">
        <h1 className="font-bold text-5xl">BLOG PAGE</h1>
      </Link>
      <div className="flex justify-between text-2xl mt-2 pb-2 text-gray-600 border-b-2 border-gray-600">
        <p>Bennets Blog Page</p>
        <div>
          <Link to="/blogs" className="ml-3">
            Blogs
          </Link>
          <Link to="/about" className="ml-3">
            About
          </Link>
          <Link to="/blogs/create" className="ml-3">
            New Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
