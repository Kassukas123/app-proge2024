const express = require("express");
const router = express.Router();

router.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

router.get("/ab(cd)?e", (req, res) => {
  res.send("ab(cd)?e");
});

router.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

router.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

const postMiddleware = (req, res, next) => {
  console.log("The response will be sent via next function");
  next();
};

const postHandler = (req, res) => {
  res.send(req.params);
};

router.get("/posts/:postID/", postMiddleware, postHandler);

router.delete("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

router.post("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

module.exports = router;
