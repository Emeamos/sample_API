import express from "express";
import { getPosts } from "../controller/postsController.js";
const postsRouter = express.Router();

postsRouter.get('/', getPosts);

export default postsRouter;
