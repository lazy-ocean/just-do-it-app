/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import NewTask from "../../components/forms/NewTask";
import Header from "../../components/Header";
import TasksList from "../../components/task";
import { Button } from "../../components/buttons";
import Footer from "../../components/footer";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./tasks.css";

const Tasks = ({ theme, changeTheme }) => {
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState("");

  const categorizedTasks = tasks.reduce(
    (acc, task) => {
      const { completed } = task;
      completed ? acc.completed.push(task) : acc.active.push(task);
      return acc;
    },
    { completed: [], active: [] }
  );

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
    <>
      <Header theme={theme} changeTheme={changeTheme}>
        <Button onClick={handleLogout} classn="logout">
          Log out
        </Button>
        <Button onClick={handleLogout} classn="logout--icon btn--action">
          <RiLogoutBoxRLine />
        </Button>
      </Header>
      <main className="tasks__container">
        <h3>Hi {user}!</h3>
        <NewTask setTasks={setTasks} tasks={tasks} />
        {user === "Guest" ? (
          <p className="warning">
            Mind that your changes in Guest mode will be saved only for the
            current session
          </p>
        ) : null}
        <div className="category">
          <h3 className="category__name">Active tasks 😤</h3>
          <TasksList
            tasks={categorizedTasks.active}
            category="active"
            setTasks={setTasks}
            getTasks={getTasks}
          />
        </div>
        <div className="category">
          <h3 className="category__name">Completed tasks 😎</h3>
          <TasksList
            tasks={categorizedTasks.completed}
            category="completed"
            setTasks={setTasks}
            getTasks={getTasks}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Tasks;
