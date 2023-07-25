require("dotenv").config();
const Express = require("express");
const path = require("path");
const session = require("express-session");

const users = require("./server/secrets/users");
const Guest = require("./server/units/Guest.js");

const guestRouter = require("./server/routes/guest");
const tasksRouter = require("./server/routes/tasks");
const usersRouter = require("./server/routes/users");
const sessionRouter = require("./server/routes/session");

const secretKey = process.env.SECRET_KEY;

const app = new Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
  })
);
app.use((req, res, next) => {
  if (req.session.username) {
    const { username } = req.session;
    res.locals.currentUser = users.find((user) => user.username === username);
  } else {
    res.locals.currentUser = new Guest();
  }
  next();
});

app.get("/", (req, res) => {
  res.send("all good");
});
app.use("/guest", guestRouter);
app.use("/api/tasks", tasksRouter);
app.use("/users", usersRouter);
app.use("/session", sessionRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started on port " + port);
});

module.exports = app;