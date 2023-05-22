import express from "express";
import commentsRouter from "./route/commentsRoute.js";
import postsRouter from "./route/postsRoute.js";

const app = express();

app.use('/api/comments', commentsRouter);
app.use('/api/posts', postsRouter);

const PORT = process.env.PORT || 7007
app.listen(PORT,console.log(`Server is running at ${PORT}`))