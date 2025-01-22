const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
  },
  postContent: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
    default: 0,
  },
  comments: {
    type: Number,
    required: false,
    default: 0,
  },
  shares: {
    type: Number,
    required: false,
    default: 0,
  },
  image: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
