const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      id: 1,
      content: "Hi, this is my first post on Linkedin",
    });

    await newPost.save();

    res.status(200).json({ message: "Post saved successfully", newPost });
  } catch (error) {
    console.error("Error while posting: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = createPost;
