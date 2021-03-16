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

  return (
    <div>
      <h1>List of Items</h1>
      {tasks.length ? (
        <div>
          {/* Render the list of items */}
          {tasks.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )}
    </div>
  );
};

export default Tasks;
