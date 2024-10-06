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

exports.create = (req, res) => {
  const { title, priority } = req.body;

  if (!title || title === "" || typeof priority !== "number") {
    return res
      .status(400)
      .send({ type: "Error", message: "Must include a title and a priority" });
  }

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
};

exports.read = (req, res) => {
  const activeTodos = todos.filter((todo) => !todo.deleted);
  res.send(activeTodos);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { title, priority } = req.body;

  if (!title || title === "" || typeof priority !== "number") {
    return res
      .status(400)
      .send({ type: "Error", message: "Must include a title and a priority" });
  }

  const todo = todos.find((todo) => todo.id === Number(id));

  if (!todo || todo.deleted) {
    return res.status(404).send({ type: "Error", message: "Todo not found" });
  }

  todo.title = title;
  todo.priority = priority;
  todo.updatedAt = Date.now();

  res.send(todo);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === Number(id));

  if (!todo || todo.deleted) {
    return res.status(404).send({ type: "Error", message: "Todo not found" });
  }

  todo.deleted = true;

  res.send({ message: "Todo deleted", todo });
};
