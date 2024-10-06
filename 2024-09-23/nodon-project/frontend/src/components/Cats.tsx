import {
  Box,
  List,
  ListItem,
  Typography,
  Button,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

type Todo = {
  id: number;
  title: string;
  priority: number;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();
    setCats(data);
  };

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8080/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchCats();
    fetchTodos();
  }, []);

  const handleEditCat = (cat: Cat) => {
    setSelectedCat(cat);
  };

  const handleDeleteCat = async (catId: string) => {
    await fetch(`http://localhost:8080/cats/${catId}`, {
      method: "DELETE",
    });
    fetchCats();
    setSelectedCat(null);
  };

  const handleCancel = () => {
    setSelectedCat(null);
  };

  return (
    <Container
      sx={{
        backgroundColor: "#e3f2fd",
        padding: 4,
        borderRadius: 2,
        minHeight: "100vh",
        border: "2px solid black",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          padding: 5, 
          width: "48%",
          overflow: "hidden",
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: 4, textAlign: "center" }}>
          Cats
        </Typography>
        <SubmitCat
          fetchCats={fetchCats}
          cat={selectedCat}
          onDelete={handleDeleteCat}
          onCancel={handleCancel}
        />
        <Box sx={{ marginY: 4 }} />
        <List sx={{ width: "100%" }}>
          {cats.map((cat) => (
            <ListItem
              key={cat.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
                boxShadow: 1,
                marginBottom: 1,
                borderRadius: 1,
                backgroundColor: "white",
                width: "100%",
              }}
            >
              <Typography
                onClick={() => handleEditCat(cat)}
                sx={{ flex: 1, padding: 1 }}
              >
                {cat.name}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDeleteCat(cat.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          paddingTop: 5,
          width: "48%",
          overflow: "hidden",
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: 4, textAlign: "center" }}>
          Todo List
        </Typography>
        <List sx={{ width: "100%" }}>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
                boxShadow: 1,
                marginBottom: 1,
                borderRadius: 1,
                backgroundColor: "white",
                width: "100%",
              }}
            >
              <Typography sx={{ flex: 1 }}>{todo.title}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Cats;
