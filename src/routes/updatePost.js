const express = require("express");
const router = express.Router();
const updatePost = require("../controllers/updatePostController");

router.put("/:id", updatePost);

module.exports = router;
