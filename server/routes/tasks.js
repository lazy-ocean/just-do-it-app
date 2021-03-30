const express = require("express");
const router = express.Router();
const Task = require("../units/Task");

router.get("/", (req, res) => {
  const user = res.locals.currentUser;
  const { tasks, username } = user;
  res.json({ tasksList: tasks, username });
  console.log("Sent list of items");
});

router.post("/", (req, res) => {
  const user = res.locals.currentUser;
  const tasks = user.getTasks();
  const { content } = req.body;
  if (!content) {
    res.status(422);
  } else {
    const newTask = new Task(content);
    user.setTasks([...tasks, newTask]);
    res.json(newTask);
  }
});

router.patch("/:id", (req, res) => {
  const user = res.locals.currentUser;
  const { content, completed } = req.body;
  const errors = {};
  if (!content) errors.title = "Can't be blank";
  const tasks = user.getTasks();
  if (Object.keys(errors).length === 0) {
    user.setTasks(
      tasks.map((t) => {
        if (t.id.toString() === req.params.id) {
          t.content = content;
          t.completed = completed;
        }
        return t;
      })
    );
    res.send("Successfully updated");
  }
  res.status(422);
});

router.delete("/:id", (req, res) => {
  const user = res.locals.currentUser;
  let tasks = user.getTasks();
  user.setTasks(tasks.filter((t) => t.id.toString() !== req.params.id));
  console.log("deleted");
  res.send("Successfully deleted");
});

module.exports = router;
