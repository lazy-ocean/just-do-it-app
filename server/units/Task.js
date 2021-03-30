let id = 1;

class Task {
  constructor(content) {
    this.content = content;
    id += 1;
    this.id = id;
    this.completed = false;
  }
}

module.exports = Task;
