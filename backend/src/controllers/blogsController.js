import createHttpError from "http-errors";
import { Blog } from "../models/blogModel.js";
import mongoose from "mongoose";

export const getAllBlogs = async (request, response, next) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return response.status(200).json({
      count: blogs.length,
      blogs: blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleBlog = async (request, response, next) => {
  const id = request.params.id;

  try {
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "Invalid blog id");
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      throw createHttpError(404, "Blog not found");
    }

    return response.status(200).json({ blog });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (request, response, next) => {
  const title = request.body.title;
  const snippet = request.body.snippet;
  const body = request.body.body;

  try {
    if (!title || !snippet || !body) {
      throw createHttpError(
        400,
        "Send all required fields: title, snippet, body"
      );
    }
    const newBlog = {
      title: title,
      snippet: snippet,
      body: body,
    };
    const blog = await Blog.create(newBlog);
    return response.status(201).send(blog);
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (request, response, next) => {
  const id = request.params.id;
  const newTitle = request.body.title;
  const newSnippet = request.body.snippet;
  const newBody = request.body.body;

  try {
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "Invalid blog id");
    }

    if (!newTitle || !newSnippet || !newBody) {
      throw createHttpError(
        400,
        "Send all required fields: title, snippet, body"
      );
    }

    const blog = await Blog.findByIdAndUpdate(id, request.body);
    if (!blog) {
      throw createHttpError(404, "Blog not found");
    }

    return response.status(200).send({ message: "Blog updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (request, response, next) => {
  const id = request.params.id;

  try {
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "Invalid blog id");
    }

    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      throw createHttpError(404, "Blog not found");
    }

    return response.status(204).send({ message: "Blog deleted successfully" });
  } catch (error) {
    next(error);
  }
};
