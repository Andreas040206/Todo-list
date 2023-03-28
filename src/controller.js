import { Task, ProjectCreater, projectArray } from "./ObjectCreator";
import { loader, getValueByForm } from "./pageLoader";

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
    let priority = prompt("priority please");

    return { name, desciption, deadline, priority };
  },
};

const createProject = function (infoObj) {
  let newProject = new ProjectCreater(infoObj);
  projectArray.push(newProject);
  saveToLocalStorage();
  loader();
};

const editProject = function (infoObj, projectArrayNum) {
  let newProject = new ProjectCreater(infoObj);
  newProject.TaskList = projectArray[projectArrayNum].TaskList;
  projectArray.splice(projectArrayNum, 1, newProject);
  saveToLocalStorage();
  loader();
};

const sortBy = function (projectArrayNum, sortBy) {
  let sortedArray = [];

  if (sortBy === "deadline") {
    let numbersArray = [];

    for (let i = 0; i < projectArray[projectArrayNum].TaskList.length; i++) {
      numbersArray.push(
        calcDaysIntil(projectArray[projectArrayNum].TaskList[i].deadline)
      );
    }
    numbersArray.sort(function (a, b) {
      {
        return a - b;
      }
    });

    for (let j = 0; j < numbersArray.length; j++) {
      for (let k = 0; k < numbersArray.length; k++) {
        if (
          numbersArray[j] ===
          calcDaysIntil(projectArray[projectArrayNum].TaskList[k].deadline)
        ) {
          sortedArray.push(projectArray[projectArrayNum].TaskList[k]);
        }
      }
    }
  } else {
    for (let i = 0; i < projectArray[projectArrayNum].TaskList.length; i++) {
      if (projectArray[projectArrayNum].TaskList[i].priority === "high") {
        sortedArray.push(projectArray[projectArrayNum].TaskList[i]);
      }
    }
    for (let j = 0; j < projectArray[projectArrayNum].TaskList.length; j++) {
      if (projectArray[projectArrayNum].TaskList[j].priority === "medium") {
        sortedArray.push(projectArray[projectArrayNum].TaskList[j]);
      }
    }
    for (let k = 0; k < projectArray[projectArrayNum].TaskList.length; k++) {
      if (projectArray[projectArrayNum].TaskList[k].priority === "low") {
        sortedArray.push(projectArray[projectArrayNum].TaskList[k]);
      }
    }
  }

  projectArray[projectArrayNum].TaskList = sortedArray;
};

let currentPageChecker = "home";

if (!localStorage.getItem("currentPageChecker")) {
  localStorage.setItem("currentPageChecker", "home");
} else {
  currentPageChecker = localStorage.getItem("currentPageChecker");
}

const btnActivation = {
  pageDirections: {
    homeBtnActivated: function () {
      currentPageChecker = "home";
      localStorage.setItem("currentPageChecker", "home");
      loader();
    },
    extraTaskBtnActivated: function () {
      currentPageChecker = "tasks";
      localStorage.setItem("currentPageChecker", "tasks");
      loader();
    },
    projectBtnActivated: function () {
      currentPageChecker = "projects";
      localStorage.setItem("currentPageChecker", "projects");
      loader();
    },
    specificProjectBtnActivated: function (btnNum) {
      currentPageChecker = btnNum;
      localStorage.setItem("currentPageChecker", btnNum);
      loader();
    },
  },
  projectArrayEdits: {
    editBtn: function (btnNum) {
      getValueByForm.forProject(btnNum);
    },
    deleteBtn: function (btnNum) {
      projectArray.splice(btnNum, 1);
      btnActivation.pageDirections.projectBtnActivated();
      saveToLocalStorage();
      loader();
    },
    addProjectBtn: function () {
      getValueByForm.forProject();
    },
    taskArrayAdd: function (btnNum) {
      getValueByForm.forTask(btnNum);
    },
    createTask: function (projectArrayNum, obj) {
      projectArray[projectArrayNum].addTask(obj);
      sortBy(projectArrayNum);
      saveToLocalStorage();
      loader();
    },
    deleteTaskBtn: function (projectNum, taskNum) {
      projectArray[projectNum].removeTask(taskNum);
      loader();
    },
    editTaskBtn: function (projectNum, taskNum) {
      getValueByForm.forTask(projectNum, taskNum);
    },
    editTask(projectNum, obj, taskNum) {
      projectArray[projectNum].editTask(taskNum, obj);
      loader();
    },
    sortedByTime(projectArrayNum, sortedBy) {
      sortBy(projectArrayNum, sortedBy);
      loader();
    },
  },
  localStorage: {
    save: function () {
      localStorage.setItem("currentPage", currentPageChecker);
      console.log("saved");
    },
    load: function () {
      console.log("loaded");
      loader;
    },
  },
};

const calcDaysIntil = function (date) {
  let currentTime = new Date();

  let timeArray = date.split("-");

  let totalTime =
    (timeArray[0] - currentTime.getFullYear()) * 365 +
    (timeArray[1] - (currentTime.getMonth() + 1)) * 30 +
    (timeArray[2] - currentTime.getDate());

  return totalTime;
};

const saveToLocalStorage = function () {
  localStorage.setItem("projectArray", JSON.stringify(projectArray));
};

export {
  btnActivation,
  currentPageChecker,
  createProject,
  editProject,
  calcDaysIntil,
};
