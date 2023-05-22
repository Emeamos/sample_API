import express from "express";
import { getComments } from "../controller/commentsController";
const commentsRouter = express.Router();

commentsRouter.get('/', getComments);

module.exports = router;
