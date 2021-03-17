const Express = require("express");
const path = require("path");
const crypto = require("crypto");
const session = require("express-session");

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  isGuest() {
    return false;
  }
}

class Guest {
  constructor() {
    this.guest = true;
  }

  isGuest() {
    return this.guest;
  }
}

const encrypt = (text) => {
  const hash = crypto.createHmac("sha512", "salt");
  hash.update(text);
  return hash.digest("hex");
};

const users = [new User("admin", encrypt("qwerty"))];

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
    res.status(422);
    res.send("Invalid nickname or password");
    return;
  }
  req.session.username = username;
  /////// REDIRECT TO TASKS OR SOMEWHERE ELSE, NOW DOESN'T WORK WHEN ERRORS (DOESN'T HIDE BANNER WHEN e.preventDefault())
  res.redirect("/");
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
