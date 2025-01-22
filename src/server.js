const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const createRoutes = require("./routes/createPost");
const fetchRoutes = require("./routes/fetchPost.js");
const deleteRoutes = require("./routes/deletePost.js");
const updateRoutes = require("./routes/updatePost.js");

const app = express();
const PORT = 9999;

const mongoDbUri =
  "mongodb+srv://mukeshjio12344321:Wo85wFksYuvVgQ5Q@linkedinbackend.8ymka.mongodb.net/?retryWrites=true&w=majority&appName=LinkedinBackend";

mongoose
  .connect(mongoDbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1);
  });

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/create-post", createRoutes);
app.use("/fetch-posts", fetchRoutes);
app.use("/delete-post", deleteRoutes);
app.use("/update-post", updateRoutes);

// routes
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
