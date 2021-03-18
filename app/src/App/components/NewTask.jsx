/* eslint-disable react/prop-types */
import { Input, FormControl, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const NewTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = { content: newTask };
    axios
      .post("/tasks", t)
      .then((response) => {
        setTasks([...tasks, response.data]);
      })
      .catch(() => {
        //setErrors(e.response.data);
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl id="username" isRequired>
        <Input
          name="username"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What are you gonna do today?"
        />
        <Button type="submit">Add</Button>
        {/* add select categories (or nah) */}
      </FormControl>
    </form>
  );
};

export default NewTask;
