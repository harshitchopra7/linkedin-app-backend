const Post = require("../models/Post");

const fetchAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (error) {
    console.error("Error in fetching all posts: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = fetchAllPosts;
