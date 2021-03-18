import React, { useState, useEffect } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const t = await axios.get("/tasks");
      setTasks(t.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  console.log(tasks);
  return (
    <div>
      <h1>List of Items</h1>
      {tasks.length ? (
        <div>
          {/* Render the list of items */}
          {tasks.map((t) => (
            <div key={t}>{t}</div>
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
