let projectArray = [];

class ProjectCreater {
  constructor(obj) {
    this.name = obj.name;
    this.description = obj.description;
    this.TaskList = [];
  }
  addTask(obj) {
    let task = new Task(obj);
    this.TaskList.push(task);
  }
  removeTask(taskNum) {
    this.TaskList.splice(taskNum, 1);
  }
  editTask(taskNum, obj) {
    let task = new Task(obj);
    this.TaskList.splice(taskNum, 1, task);
  }
}

const ProjectMethoeds = {
  addTask(obj) {
    let task = new Task(obj);
    this.TaskList.push(task);
  },
  removeTask(taskNum) {
    this.TaskList.splice(taskNum, 1);
  },
  editTask(taskNum, obj) {
    let task = new Task(obj);
    this.TaskList.splice(taskNum, 1, task);
  },
};

function Task(obj) {
  this.name = obj.name;
  this.description = obj.description;
  this.priority = obj.priority;
  this.deadline = obj.deadline;
}

const TOPProject2 = new ProjectCreater({
  name: "Project 1",
  description: "This is just an example, you can delete it with no trouble",
});

TOPProject2.TaskList.push(
  new Task({
    project: "TOPProject3",
    name: "Task example",
    description:
      "This is also just an example, on a task, you can easyly delete it",
    deadline: "2023-04-04",
    priority: "high",
  })
);

projectArray.push(TOPProject2);

// This methoed adds all the ProjectCreater methoeds to the new array from local storage

const addMetoedsToProjectArray = function (array) {
  for (let i = 0; i < array.length; i++) {
    array[i].addTask = function (obj) {
      let task = new Task(obj);
      this.TaskList.push(task);
    };
    array[i].removeTask = function (taskNum) {
      this.TaskList.splice(taskNum, 1);
    };
    array[i].editTask = function (taskNum, obj) {
      let task = new Task(obj);
      this.TaskList.splice(taskNum, 1, task);
    };
  }
};

// Loads project array if one exists.

if (!localStorage.getItem("projectArray")) {
  localStorage.setItem("projectArray", JSON.stringify(projectArray));
} else {
  let projectArrayFromStorage = JSON.parse(
    localStorage.getItem("projectArray")
  );
  addMetoedsToProjectArray(projectArrayFromStorage);
  projectArray = projectArrayFromStorage;
}

export { projectArray, ProjectCreater, Task };
