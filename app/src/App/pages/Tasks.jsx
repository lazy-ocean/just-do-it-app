import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import NewTask from "../components/NewTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState("");

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
          {/* Render the list of items */}
          {tasks.map(({ content }) => (
            <div key={content}>{content}</div>
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
