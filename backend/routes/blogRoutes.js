import express from "express";
import { Blog } from "../models/blogModel.js";

const router = express.Router();

// Route for Save a new Blog
router.post("/", async (request, response) => {
  try {
    if (!request.body.title || !request.body.snippet || !request.body.body) {
      return response
        .status(400)
        .send({ message: "Send all required fields: title, snippet, body" });
    }

    const newBlog = {
      title: request.body.title,
      snippet: request.body.snippet,
      body: request.body.body,
    };
    const blog = await Blog.create(newBlog);
    return response.status(201).send(blog);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Blogs from Database
router.get("/", async (request, response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return response.status(200).json({
      count: blogs.length,
      blogs: blogs,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Blog from Database by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const blog = await Blog.findById(id);

    return response.status(200).json({ blog });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Blog
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.title || !request.body.snippet || !request.body.body) {
      return response.status(400).send({
        message: "Send all required fields: title, snippet, body",
      });
    }

    const { id } = request.params;

    const result = await Blog.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Blog not found" });
    }
    return response.status(200).send({ message: "Blog updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Blog
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Blog.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Blog not found" });
    }
    return response.status(200).send({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
