import React from "react";
import axios from "axios";
import EasyEdit, { Types } from "react-easy-edit";

const TasksList = ({ tasks, setTasks }) => {
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
      {tasks.map(({ content, id }) => (
        <Task key={id} content={content} id={id} handleDelete={handleDelete} />
      ))}
    </div>
  ) : (
    <div>
      <h2>There&apos;re no tasks for you, good job!</h2>
    </div>
  );
};

const Task = ({ id, content, handleDelete }) => {
  const handleEditing = (value) => {
    const edited = { content: value };
    axios.patch(`/tasks/${id}`, edited).catch(() => {});
  };

  return (
    <>
      <EasyEdit
        type={Types.TEXT}
        value={content}
        onSave={handleEditing}
        onCancel={() => {}}
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"
      />
      <button onClick={() => handleDelete(id)}>Delete task</button>
    </>
  );
};

export default TasksList;