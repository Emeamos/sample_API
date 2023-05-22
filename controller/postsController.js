import axios from "axios";

 export const getPosts = async(req, res) => {
  const limit = req.query.limit || 10; 

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

