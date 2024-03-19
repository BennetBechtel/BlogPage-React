import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CreateBlog from "./pages/CreateBlog";
import ReadBlog from "./pages/ReadBlog";
import EditBlog from "./pages/EditBlog";
import DeleteBlog from "./pages/DeleteBlog";

const App = () => {
  return (
    <div className="px-5 pt-5 font-serif min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/blogs" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
        <Route path="/blogs/read/:id" element={<ReadBlog />} />
        <Route path="/blogs/edit/:id" element={<EditBlog />} />
        <Route path="/blogs/delete/:id" element={<DeleteBlog />} />

        <Route path="/" element={<Navigate to="/blogs" />} />
      </Routes>
    </div>
  );
};

export default App;
