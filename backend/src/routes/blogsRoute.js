import * as BlogsController from "../controllers/blogsController.js";
import express from "express";

const router = express.Router();

router.get("/", BlogsController.getAllBlogs);

router.get("/:id", BlogsController.getSingleBlog);

router.post("/", BlogsController.createBlog);

router.patch("/:id", BlogsController.updateBlog);

router.delete("/:id", BlogsController.deleteBlog);

export default router;
