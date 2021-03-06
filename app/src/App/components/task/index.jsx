import React, { useEffect, useState } from "react";
import axios from "axios";
import EasyEdit, { Types } from "react-easy-edit";
import "./task.css";
import { Button } from "../buttons/";
import { RiDeleteBin6Line, RiSave3Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const TasksList = ({ tasks, setTasks, getTasks, category }) => {
  const handleDelete = (id) => {
    axios
      .delete(`/api/tasks/${id}`)
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
          getTasks={getTasks}
        />
      ))}
    </div>
  ) : (
    <div>
      {category === "active" ? (
        <h2 className="message">
          There&apos;re no tasks for you, good job!{" "}
          <a
            href="https://randomcatvideo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link--emphasized"
          >
            Here
          </a>{" "}
          is a random cat video.
        </h2>
      ) : (
        <h2 className="message">You can do it!</h2>
      )}
    </div>
  );
};

const Task = ({ id, content, completed, handleDelete, getTasks }) => {
  const [completedTask, setCompletedTask] = useState(completed);
  const handleEditing = (value) => {
    const edited = { content: value, completed: completedTask };
    axios.patch(`/api/tasks/${id}`, edited).catch(() => {});
  };

  useEffect(() => {
    handleEditing(content);
  }, [completedTask]);

  useEffect(() => {
    const timer = setTimeout(() => getTasks(), 300);
    return () => {
      clearTimeout(timer);
    };
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
          <svg className="check" width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </label>
        <EasyEdit
          type={Types.TEXT}
          value={content}
          onSave={handleEditing}
          onCancel={() => {}}
          saveButtonLabel={<RiSave3Line />}
          saveButtonStyle="btn btn--task"
          cancelButtonStyle="btn btn--task"
          cancelButtonLabel={<VscChromeClose />}
        />
      </div>

      <Button classn="action" onClick={() => handleDelete(id)}>
        <RiDeleteBin6Line />
      </Button>
    </div>
  );
};

export default TasksList;
