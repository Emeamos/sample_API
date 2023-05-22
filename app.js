import express from "express";

const app = express();

const PORT = process.env.PORT || 7007
app.listen(PORT,console.log(`Server is running at ${PORT}`))