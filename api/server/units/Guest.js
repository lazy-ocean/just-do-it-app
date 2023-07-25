const Task = require("./Task");

class Guest {
  constructor() {
    this.guest = true;
    this.username = "Guest";
    this.tasks = [
      new Task("Learn Express.js"),
      new Task("Buy groceries"),
      new Task("Ace the interview"),
    ];
  }
  isGuest() {
    return this.guest;
  }
  getTasks() {
    return this.tasks;
  }
  setTasks(t) {
    this.tasks = t;
  }
}

module.exports = Guest;
