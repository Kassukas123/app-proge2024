const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todos.controller");
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todos.middlewares");

router.use(todoRouteMiddleware);

router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", todoController.create);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;
