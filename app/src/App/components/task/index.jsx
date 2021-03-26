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
    <div className={`task__container ${completedTask ? "complete" : ""}`}>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        checked={completedTask}
        onChange={() => setCompletedTask(!completedTask)}
        className="cbx__input"
      />
      <div className="cbx">
        <label htmlFor={`checkbox-${id}`}>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </label>
        <EasyEdit
          type={Types.TEXT}
          value={content}
          onSave={handleEditing}
          onCancel={() => {}}
          saveButtonLabel="Save"
          cancelButtonLabel="Cancel"
        />
      </div>

      <Button classn="delete" onClick={() => handleDelete(id)}>
        Delete task
      </Button>
    </div>
  );
};

export default TasksList;
