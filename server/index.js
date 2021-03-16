const Express = require("express");
const path = require("path");

const app = new Express();
app.use(Express.static(path.join(__dirname, "app/build")));

app.get("/", (req, res) => {
  res.send("all good");
});
app.get("/tasks", (req, res) => {
  const tasks = ["item1", "item2", "item3"];
  res.json(tasks);
  console.log("Sent list of items");
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started on port " + port);
});
