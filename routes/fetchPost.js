const express = require("express");
const router = express.Router();
const fetchAllPosts = require("../controllers/fetchPostController");

router.get("/", fetchAllPosts);

module.exports = router;
