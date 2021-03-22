/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import NewTask from "../components/NewTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState("");
  const [editedTask, setEditedTask] = useState("");

  const EditableControls = ({ onEdit, isEditing, onSubmit, onCancel }) => {
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <Button onClick={onSubmit}>Submit</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonGroup>
    ) : (
      <Button onClick={onEdit}>Edit</Button>
    );
  };

  const getTasks = async () => {
    try {
      const t = await axios.get("/tasks");
      const { tasksList, username } = t.data;
      setTasks(tasksList);
      setUser(username);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .delete("/session")
      .then(() => {
        setRedirect(true);
      })
      .catch(() => {});
  };

  const handleDelete = (id) => {
    axios
      .delete(`/tasks/${id}`)
      .then(() => {
        const newTasks = tasks.filter((t) => t.id !== id);
        setTasks(newTasks);
      })
      .catch(() => {});
  };

  const handleEditing = (id) => {
    const edited = { content: editedTask };
    axios.patch(`/tasks/${id}`, edited).catch(() => {});
  };

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Button onClick={handleLogout}>Log out</Button>
      <h3>Hi {user}!</h3>
      <NewTask setTasks={setTasks} tasks={tasks} />
      {user === "Guest" ? (
        <p>Mind that your added tasks won&apos;t be saved in Guest mode</p>
      ) : null}
      <h1>List of Items</h1>
      {tasks.length ? (
        <div>
          {tasks.map(({ content, id }) => (
            <div key={id}>
              <Editable
                defaultValue={content}
                submitOnBlur={true}
                isPreviewFocusable={false}
                onChange={(str) => setEditedTask(str)}
                onSubmit={() => handleEditing(id)}
              >
                {(props) => (
                  <>
                    <EditablePreview />
                    <EditableInput />
                    <EditableControls id={id} content={content} {...props} />
                  </>
                )}
              </Editable>
              <Button onClick={() => handleDelete(id)}>Delete task</Button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>There&apos;re no tasks for you, good job!</h2>
        </div>
      )}
    </div>
  );
};

export default Tasks;
