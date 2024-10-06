import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

type Cat = {
  id: string;
  name: string;
};

type SubmitCatProps = {
  fetchCats: () => void;
  cat: Cat | null;
  onDelete: (catId: string) => void;
  onCancel: () => void;
};

const SubmitCat = ({ fetchCats, cat, onDelete, onCancel }: SubmitCatProps) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (cat) {
      setName(cat.name);
    } else {
      setName("");
    }
  }, [cat]);

  const submitCat = async () => {
    try {
      const method = cat ? "PUT" : "POST";
      const url = cat
        ? `http://localhost:8080/cats/${cat.id}`
        : "http://localhost:8080/cats";

      const response = await fetch(url, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name || "Nimetu kass" }),
      });

      if (response.ok) {
        fetchCats();
        onCancel();
      } else {
        console.warn("No success");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await submitCat();
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (cat && event.target.value === "") {
      onCancel();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 9,
        borderRadius: 1,
        boxShadow: 2,
        width: "70%", 
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Stack spacing={2} alignItems="center">
          {" "}
          <TextField
            label="Cat name"
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit">
            {cat ? "Update" : "Add"}
          </Button>
          {cat && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                if (cat) onDelete(cat.id);
              }}
            >
              Delete
            </Button>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitCat;