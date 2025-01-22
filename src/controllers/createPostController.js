const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      postId: "2",
      postedBy: "Harshit Chopra",
      postContent:
        "Thrilled to share the project that I have built is being loved by more than 200 people.",
      userId: 20,
    });

    await newPost.save();

    res.status(200).json({ message: "Post saved successfully", newPost });
  } catch (error) {
    console.error("Error while posting: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = createPost;
