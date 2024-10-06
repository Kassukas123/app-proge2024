import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  priority: number;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8080/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
};

export default TodoList;
