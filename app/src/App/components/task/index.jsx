import React, { useEffect, useState } from "react";
import axios from "axios";
import EasyEdit, { Types } from "react-easy-edit";
import "./task.css";
import { Button } from "../buttons/";

const TasksList = ({ tasks, setTasks }) => {
  // TODO: tasks by categories
  const completedTasks = tasks.filter(({ completed }) => completed);

  const handleDelete = (id) => {
    axios
      .delete(`/tasks/${id}`)
      .then(() => {
        const newTasks = tasks.filter((t) => t.id !== id);
        setTasks(newTasks);
      })
      .catch(() => {});
  };

  return tasks.length ? (
    <div>
      {tasks.map(({ content, id, completed }) => (
        <Task
          key={id}
          content={content}
          completed={completed}
          id={id}
          handleDelete={handleDelete}
          completedTasks={completedTasks}
        />
      ))}
    </div>
  ) : (
    <div>
      <h2>There&apos;re no tasks for you, good job!</h2>
    </div>
  );
};

const Task = ({ id, content, completed, handleDelete }) => {
  const [completedTask, setCompletedTask] = useState(completed);
  const handleEditing = (value) => {
    const edited = { content: value, completed: completedTask };
    axios.patch(`/tasks/${id}`, edited).catch(() => {});
  };

  useEffect(() => {
    handleEditing(content);
  }, [completedTask]);

  return (
    <div className={`task__container ${completedTask ? "complete" : null}`}>
      <input
        type="checkbox"
        checked={completedTask}
        onChange={() => setCompletedTask(!completedTask)}
      />
      <EasyEdit
        type={Types.TEXT}
        value={content}
        onSave={handleEditing}
        onCancel={() => {}}
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"
      />
      <Button onClick={() => handleDelete(id)}>Delete task</Button>
    </div>
  );
};

export default TasksList;
