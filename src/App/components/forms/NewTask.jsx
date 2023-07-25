import React, { useState } from "react";
import axios from "axios";
import { Button } from "../buttons";
import { GoPlus } from "react-icons/go";
import "./forms.css";

const NewTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = { content: newTask };
    axios
      .post("/api/tasks", t)
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask("");
      })
      .catch(() => {});
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="task__form">
      <input
        className="input task__input"
        type="text"
        name="username"
        value={newTask}
        id="username"
        required
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="What are you gonna do today?"
      />
      <Button type="submit" classn="action">
        <GoPlus />
      </Button>
    </form>
  );
};

export default NewTask;
