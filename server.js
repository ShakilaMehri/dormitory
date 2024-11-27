const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;


app.use(express.static("public"));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my express server! Use /items to get the list of items and /galleryItems to get the gallery data.");
});

app.get("/items", async (req, res) => {
  fs.readFile("./items.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/galleryItems", (req, res) => {
  const galleryItemsPath = path.join(__dirname, "galleryItems.json");
  fs.readFile(galleryItemsPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading galleryItems.json", err);
      res.status(500).send("Error reanding file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
