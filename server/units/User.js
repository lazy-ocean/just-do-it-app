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
  setTasks(t) {
    this.tasks = t;
  }
}

module.exports = User;
