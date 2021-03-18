const Express = require("express");
const path = require("path");
const crypto = require("crypto");
const session = require("express-session");

class User {
  constructor(username, password, tasks) {
    this.username = username;
    this.password = password;
    this.tasks = tasks || [];
  }
  isGuest() {
    return false;
  }
  getTasks() {
    return this.tasks;
  }
}

class Guest {
  constructor() {
    this.guest = true;
    this.username = "Guest";
    this.tasks = ["Learn Express.js", "Buy groceries"];
  }
  isGuest() {
    return this.guest;
  }
  getTasks() {
    return this.tasks;
  }
}

const encrypt = (text) => {
  const hash = crypto.createHmac("sha512", "salt");
  hash.update(text);
  return hash.digest("hex");
};

const users = [new User("1", encrypt("1")), new Guest()];

const app = new Express();
app.use(Express.static(path.join(__dirname, "app/build")));
app.use(Express.json());
app.use(Express.urlencoded());
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use((req, res, next) => {
  if (req.session?.username) {
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

app.post("/session", (req, res) => {
  const { username, password } = req.body;
  let user = users.find((u) => u.username === username);
  if (!user || user.password !== encrypt(password)) {
    res.status(400).send({ commonErr: "Invalid nickname or password" });
    return;
  }
  req.session.username = username;
  /////// REDIRECT TO TASKS OR SOMEWHERE ELSE, NOW DOESN'T WORK WHEN ERRORS (DOESN'T HIDE BANNER WHEN e.preventDefault())
  res.send("Successfully logged in");
});

app.post("/guest", (req, res) => {
  let user = new Guest();
  req.session.username = user.username;
  /////// REDIRECT TO TASKS OR SOMEWHERE ELSE, NOW DOESN'T WORK WHEN ERRORS (DOESN'T HIDE BANNER WHEN e.preventDefault())
  res.send("Successfully logged in");
});

app.get("/tasks", (req, res) => {
  const user = res.locals.currentUser;
  const { tasks } = user;
  res.json(tasks);
  console.log("Sent list of items");
});

app.post("/users", (req, res) => {
  const errors = {};
  const { username, password } = req.body;
  if (!username) {
    errors.username = "Username can't be blank";
  } else {
    const isUniq = !users.some((user) => user.username === username);
    if (!isUniq) {
      errors.username = "This username is already taken";
    }
  }
  if (!password) errors.password = "Password can't be blank";
  if (Object.keys(errors).length > 0) {
    res.status(422).send(errors);
    return;
  }
  const newUser = new User(username, encrypt(password));
  users.push(newUser);
  res.send("Successfully registered");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started on port " + port);
});
