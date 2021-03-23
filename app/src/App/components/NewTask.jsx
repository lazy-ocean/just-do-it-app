/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { Button } from "./buttons/";

const NewTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = { content: newTask };
    axios
      .post("/tasks", t)
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask("");
      })
      .catch(() => {});
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="username"
        value={newTask}
        id="username"
        required
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="What are you gonna do today?"
      />
      <Button type="submit">Add</Button>
      {/* add select categories (or nah) */}
    </form>
  );
};

export default NewTask;
