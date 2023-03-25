import { createObjFromValues } from "./controller";

const projectArray = [];

function addProject() {
  projectArray.push(createObjFromValues.forProject(ProjectCreater));
}

class ProjectCreater {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.TaskList = [];
  }
  addTask() {
    this.TaskList.push(createObjFromValues.forTask(Task));
  }
}

function Task(project, name, description, deadline, priority) {
  this.project = project;
  this.name = name;
  this.description = description;
  this.deadline = deadline;
  this.priority = priority;
}

const TOPProject = new ProjectCreater(
  "TOP1",
  "Learning how to program through an open source programming course",
  "purple"
);

const TOPProject2 = new ProjectCreater(
  "TOP2",
  "Learning how to program through an open source programming course",
  "purple"
);

const TOPProject3 = new ProjectCreater(
  "TOP3",
  "Learning how to program through an open source programming course",
  "purple"
);
TOPProject3.TaskList.push(
  new Task(
    "TOPProject3",
    "Java",
    "Learning java instead od javascript so i can move on to CS and make my own minecraft",
    "20/5",
    "high",
    "none"
  )
);

projectArray.push(TOPProject);
projectArray.push(TOPProject2);
projectArray.push(TOPProject3);
console.log(projectArray);

export { projectArray, addProject };
