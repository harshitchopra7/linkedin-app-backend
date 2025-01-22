const Post = require("../models/Post");

const updatePost = async (req, res) => {
  const { id } = req.params;

  console.log("reqL ", req);

  //   try {
  //     const post = await Post.findById(id);

  //     if (!post) {
  //       return res.status(400).json({ message: "Post not found" });
  //     }

  //     post.content = req.body.content;

  //     await post.save();

  //     res.status(200).json({ message: "Post updated successfully: ", post });
  //   } catch (err) {
  //     console.error("Error in updating post: ", err);
  //     res.status(500).json({ message: "Internal Server Error" });
  //   }
};

module.exports = updatePost;
