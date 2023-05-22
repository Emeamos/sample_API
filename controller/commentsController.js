import axios from "axios";

 export const getComments= async(req, res) => {
  const limit = req.query.limit || 10; 

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
    const comments = response.data;
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


