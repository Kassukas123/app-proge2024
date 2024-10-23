const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const todos = [
  {
    id: 1,
    title: "tee kodutöid",
    priority: 1,
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: 2,
    title: "vaata, et essa oleks tehtud",
    priority: 2,
    createdAt: 1727098800586,
    updatedAt: null,
    deleted: false,
  },
];

const secretKey = "impossible";

exports.generateToken = [
  check("name").notEmpty().withMessage("Name is required"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    const token = jwt.sign({ name }, secretKey, { expiresIn: "1h" });
    res.send({ token });
  },
];

exports.verifyToken = (req, res) => {
  const token = req.body.token;
  if (!token) {
    return res
      .status(400)
      .send({ type: "Error", message: "Token is required" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({ type: "Error", message: "Invalid token" });
    }
    res.send({ valid: true, decoded });
  });
};

exports.create = [
  check("title").notEmpty().withMessage("Title is required"),
  check("priority").isNumeric().withMessage("Priority must be a number"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, priority } = req.body;

    const newTodo = {
      id: todos.length + 1,
      title: title,
      priority: priority,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };

    todos.push(newTodo);
    res.send(newTodo);
  },
];

exports.read = (req, res) => {
  const activeTodos = todos.filter((todo) => !todo.deleted);
  res.send(activeTodos);
};

exports.update = [
  check("title").notEmpty().withMessage("Title is required"),
  check("priority").isNumeric().withMessage("Priority must be a number"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { title, priority } = req.body;

    const todo = todos.find((todo) => todo.id === Number(id));

    if (!todo || todo.deleted) {
      return res.status(404).send({ type: "Error", message: "Todo not found" });
    }

    todo.title = title;
    todo.priority = priority;
    todo.updatedAt = Date.now();

    res.send(todo);
  },
];

exports.delete = (req, res) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === Number(id));

  if (!todo || todo.deleted) {
    return res.status(404).send({ type: "Error", message: "Todo not found" });
  }

  todo.deleted = true;

  res.send({ message: "Todo deleted", todo });
};
