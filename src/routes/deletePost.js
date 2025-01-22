const express = require("express");
const router = express.Router();
const deletePost = require("../controllers/deleteController");

router.delete("/:id", deletePost);

module.exports = router;
