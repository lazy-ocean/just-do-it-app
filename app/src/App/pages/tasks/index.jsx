/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import NewTask from "../../components/NewTask";
import Header from "../../components/Header";
import TasksList from "../../components/task";
import { Button } from "../../components/buttons";
import Footer from "../../components/footer";
import "./tasks.css";

const Tasks = () => {
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
      <Header>
        <Button onClick={handleLogout}>Log out</Button>
      </Header>
      <main className="tasks__container">
        <h3>Hi {user}!</h3>
        <NewTask setTasks={setTasks} tasks={tasks} />
        {user === "Guest" ? (
          <p>Mind that your added tasks won&apos;t be saved in Guest mode</p>
        ) : null}
        <h1>Active tasks 😤</h1>
        <TasksList
          tasks={categorizedTasks.active}
          category="active"
          setTasks={setTasks}
          getTasks={getTasks}
        />
        <h1>Completed tasks 😎</h1>
        <TasksList
          tasks={categorizedTasks.completed}
          category="completed"
          setTasks={setTasks}
          getTasks={getTasks}
        />
      </main>
      <Footer />
    </>
  );
};

export default Tasks;

/* {
  {
    Object.keys(categorizedTasks).map((category) => {
      return (
        <div key={category}>
          <h1>{category}</h1>
          <TasksList
            tasks={categorizedTasks[category]}
            setTasks={setTasks}
            getTasks={getTasks}
          />
        </div>
      );
    });
  }
} */
