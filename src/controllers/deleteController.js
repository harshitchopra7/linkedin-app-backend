const Post = require("../models/Post");

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Error in deleting post: ", err);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = deletePost;
