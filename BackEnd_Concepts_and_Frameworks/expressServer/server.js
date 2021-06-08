const express = require("express");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const app = express();
const port = 3030;

app.post("/upload", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  res.send("image uploaded");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
