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

function Task(project, name, description, deadline, priorty, notes) {
  this.project = project;
  this.name = name;
  this.description = description;
  this.deadline = deadline;
  this.priorty = priorty;
  this.notes = notes;
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
projectArray.push(TOPProject);
projectArray.push(TOPProject2);
projectArray.push(TOPProject3);
console.log(projectArray);

export { projectArray, addProject };
