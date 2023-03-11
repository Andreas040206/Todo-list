import { addProject, projectArray } from "./ObjectCreator";
import { loader } from "./pageLoader";

const getValuesByConsole = {
  forProject: function () {
    let name = prompt("Project name:");
    let description = prompt("Project desciption:");
    return { name, description };
  },
  forTask: function () {
    let name = prompt("Name please");
    let desciption = prompt("desciption please");
    let deadline = prompt("Deadline please");
    let priorty = prompt("priority please");
    let notes = prompt("any notes yet");
    return { name, desciption, deadline, priorty, notes };
  },
};

const createObjFromValues = {
  forTask: function (constructor) {
    let newObj = getValuesByConsole.forTask();
    const newTask = new constructor(
      this.name,
      newObj.name,
      newObj.desciption,
      newObj.deadline,
      newObj.priorty,
      newObj.notes
    );
    return newTask;
  },
  forProject: function (constructor) {
    let newObj = getValuesByConsole.forProject();
    const newProject = new constructor(
      newObj.name,
      newObj.description,
      newObj.color
    );
    return newProject;
  },
};

let currentPageChecker = "home";

const btnActivation = {
  pageDirections: {
    homeBtnActivated: function () {
      console.log("home button clicked");
      currentPageChecker = "home";
      loader();
    },
    extraTaskBtnActivated: function () {
      console.log("extra Task Button clicked");
      currentPageChecker = "tasks";
      loader();
    },
    projectBtnActivated: function () {
      console.log("project Button clicked");
      currentPageChecker = "projects";
      loader();
    },
    specificProjectBtnActivated: function (btnNum) {
      currentPageChecker = btnNum;
      console.log(projectArray[btnNum]);
      loader();
    },
  },
  projectArrayEdits: {
    editBtn: function (btnNum) {
      console.log(`edit ${btnNum}`);
      loader();
    },
    deleteBtn: function (btnNum) {
      console.log(`deleting ${btnNum}`);
      projectArray.splice(btnNum, 1);
      btnActivation.pageDirections.projectBtnActivated();
      loader();
    },
    addProjectBtn: function () {
      console.log("adding project");
      addProject();
      loader();
    },
  },
};

export { createObjFromValues, btnActivation, currentPageChecker };
