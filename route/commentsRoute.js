import express from "express";
import { getComments } from "../controller/commentsController.js";
const commentsRouter = express.Router();

commentsRouter.get('/', getComments);

export default commentsRouter;
