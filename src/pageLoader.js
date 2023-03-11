import { btnActivation, currentPageChecker } from "./controller";
import homeIcon from "./img/Icons/homeIcon.png";
import taskIcon from "./img/Icons/taskIcon.png";
import projectIcon from "./img/Icons/projectIcon.png";
import { projectArray } from "./ObjectCreator.js";
import addBtnIcon from "./img/Icons/addBtn.png";

const loader = function () {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(createFinalPageObject());
};

const createFinalPageObject = function () {
  let pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  pageContent.appendChild(createHeader());
  pageContent.appendChild(createContent());

  return pageContent;
};

const createHeader = function () {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerUpper = document.createElement("div");
  headerUpper.classList.add("headerUpper");

  let headerText = document.createElement("div");
  headerText.classList.add("headerText");

  let spanPurple1 = document.createElement("span");
  spanPurple1.classList.add("purpleSpan1", "headerText");
  spanPurple1.textContent = "Get";

  let spanBlack1 = document.createElement("span");
  spanBlack1.classList.add("headerText");
  spanBlack1.textContent = "Done";

  let spanPurple2 = document.createElement("span");
  spanPurple2.classList.add("purpleSpan2", "headerText");
  spanPurple2.textContent = ".";

  let spanBlack2 = document.createElement("span");
  spanBlack2.classList.add("blackSpan", "headerText");
  spanBlack2.textContent = "com";

  headerText.appendChild(spanPurple1);
  headerText.appendChild(spanBlack1);
  headerText.appendChild(spanPurple2);
  headerText.appendChild(spanBlack2);

  headerUpper.appendChild(headerText);

  let loginBtn = document.createElement("button");
  loginBtn.classList.add("loginBtn");
  loginBtn.textContent = "Sign in";

  headerUpper.appendChild(loginBtn);

  const headerLower = document.createElement("div");
  headerLower.classList.add("headerLower");

  header.appendChild(headerUpper);
  header.appendChild(headerLower);

  return header;
};

const createContent = function () {
  const currentPageContent = document.createElement("div");
  currentPageContent.classList.add("currentPageContent");

  currentPageContent.appendChild(createSideBar());
  currentPageContent.appendChild(createCurrentPageContentContent());

  return currentPageContent;
};

const createSideBar = function () {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  let homeIconImg = new Image();
  homeIconImg.src = homeIcon;
  homeIconImg.classList.add("sidebarIcon");

  let homeBtnCon = document.createElement("div");
  homeBtnCon.classList.add("sidebarBtnCon");

  let homeBtn = document.createElement("button");
  homeBtn.classList.add("homeBtn", "sidebarBtn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", function () {
    btnActivation.pageDirections.homeBtnActivated();
  });

  homeBtnCon.appendChild(homeIconImg);
  homeBtnCon.appendChild(homeBtn);

  let extraTaskBtnCon = document.createElement("div");
  extraTaskBtnCon.classList.add("sidebarBtnCon");

  let taskIconImg = new Image();
  taskIconImg.src = taskIcon;
  taskIconImg.classList.add("sidebarIcon");

  let extraTaskBtn = document.createElement("button");
  extraTaskBtn.classList.add("extraTaskBtn", "sidebarBtn");
  extraTaskBtn.textContent = "Tasks";
  extraTaskBtn.addEventListener("click", function () {
    btnActivation.pageDirections.extraTaskBtnActivated();
  });

  extraTaskBtnCon.appendChild(taskIconImg);
  extraTaskBtnCon.appendChild(extraTaskBtn);

  let projectBtnCon = document.createElement("div");
  projectBtnCon.classList.add("projectBtnCon");

  let projectIconImg = new Image();
  projectIconImg.src = projectIcon;
  projectIconImg.classList.add("sidebarIcon");

  let projectBtn = document.createElement("button");
  projectBtn.classList.add("projectBtn", "sidebarBtn");
  projectBtn.textContent = "Projects";
  projectBtn.addEventListener("click", function () {
    btnActivation.pageDirections.projectBtnActivated();
  });

  createAndAppendChildren.forSidebarProjectlist(projectArray, projectBtnCon);

  projectBtnCon.appendChild(projectIconImg);
  projectBtnCon.appendChild(projectBtn);

  sidebar.appendChild(homeBtnCon);
  sidebar.appendChild(extraTaskBtnCon);
  sidebar.appendChild(projectBtnCon);

  return sidebar;
};

const currentPageContentContentLoader = function () {
  while (currentPageContentContent.firstChild) {
    currentPageContentContent.removeChild(currentPageContentContent.firstChild);
  }
  document.body.appendChild(createFinalPageObject());
};

const createCurrentPageContentContent = function () {
  const currentPageContent = document.createElement("div");
  currentPageContent.classList.add("currentPageContentContent");
  currentPageContent.setAttribute("id", "currentPageContentContent");

  if (currentPageChecker === "home") {
    currentPageContent.appendChild(homePage());
  } else if (currentPageChecker === "tasks") {
    currentPageContent.appendChild(tasksPage());
  } else if (currentPageChecker === "projects") {
    currentPageContent.appendChild(projectsPage());
  } else {
    currentPageContent.appendChild(specificProjectPage());
  }
  return currentPageContent;
};

const homePage = function () {
  let homePageContent = document.createElement("div");

  return homePageContent;
};

const tasksPage = function () {
  let tasksContent = document.createElement("div");

  return tasksContent;
};

const projectsPage = function () {
  let projectsContent = document.createElement("div");
  projectsContent.classList.add("ProjectContentEl");

  createAndAppendChildren.forAllProjects(projectArray, projectsContent);

  return projectsContent;
};

const specificProjectPage = function () {
  let specificProjectContent = document.createElement("div");
  specificProjectContent.classList.add("specificProjectContentEl");

  specificProjectContent.appendChild(
    createAndAppendChildren.forCreatingProjectEl(currentPageChecker)
  );

  return specificProjectContent;
};

const createAndAppendChildren = {
  forSidebarProjectlist: function (Array, parrent) {
    let el = document.createElement("div");
    el.classList.add("projectDropDownCon");
    for (let i = 0; i < Array.length; i++) {
      let dotEl = document.createElement("div");
      dotEl.classList.add("sidebarDot");
      dotEl.textContent = "-";

      let newProjectBtn = document.createElement("button");
      newProjectBtn.classList.add("projectDropDownText");
      newProjectBtn.textContent = Array[i].name;

      newProjectBtn.addEventListener("click", function () {
        let btnNum = i;
        btnActivation.pageDirections.specificProjectBtnActivated(btnNum);
      });

      el.appendChild(dotEl);
      el.appendChild(newProjectBtn);
    }
    parrent.appendChild(el);
  },
  forAllProjects: function (Array, parrent) {
    for (let i = 0; i < Array.length; i++) {
      parrent.appendChild(createAndAppendChildren.forCreatingProjectEl(i));
    }

    let addBtn = document.createElement("btn");
    addBtn.classList.add("projectHeaderCon", "addProjectBtn");

    let addBtnIcon = document.createElement("div");
    addBtnIcon.classList.add("projectAddBtnIcon", "smallProjectElBtn");

    addBtn.appendChild(addBtnIcon);

    addBtn.addEventListener("click", function () {
      btnActivation.projectArrayEdits.addProjectBtn();
    });

    parrent.appendChild(addBtn);
  },
  forCreatingProjectEl: function (projectArrayNum) {
    let newProjectElCon = document.createElement("div");
    newProjectElCon.classList.add("projectHeaderCon");

    let newProjectEl = document.createElement("div");
    newProjectEl.classList.add("projectHeader");

    // Creating left side

    let newProjectElLeft = document.createElement("div");
    newProjectElLeft.classList.add("newProjectElLeft");

    newProjectElLeft.addEventListener("click", function () {
      btnActivation.pageDirections.specificProjectBtnActivated(projectArrayNum);
    });

    let newProjectElHeaderText = document.createElement("div");
    newProjectElHeaderText.classList.add("projectHeaderText");
    newProjectElHeaderText.textContent = `${projectArray[projectArrayNum].name}`;

    let newProjectElDisciption = document.createElement("div");
    newProjectElDisciption.classList.add("newProjectElDisciption");
    newProjectElDisciption.textContent = `${projectArray[projectArrayNum].description}`;

    newProjectElLeft.appendChild(newProjectElHeaderText);
    newProjectElLeft.appendChild(newProjectElDisciption);

    // Creating right side

    let newProjectElRight = document.createElement("div");
    newProjectElRight.classList.add("newProjectElRight");

    // Upper Right side

    let newProjectElUpperRightCon = document.createElement("div");
    newProjectElUpperRightCon.classList.add("projectElRightBtnCon");

    let deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("deleteProjectBtn", "smallProjectElBtn");
    deleteProjectBtn.addEventListener("click", function () {
      btnActivation.projectArrayEdits.deleteBtn(projectArrayNum);
    });

    let editProjectBtn = document.createElement("button");
    editProjectBtn.classList.add("editProjectBtn", "smallProjectElBtn");
    editProjectBtn.addEventListener("click", function () {
      btnActivation.projectArrayEdits.editBtn(projectArrayNum);
    });

    newProjectElUpperRightCon.appendChild(editProjectBtn);
    newProjectElUpperRightCon.appendChild(deleteProjectBtn);

    // lower Right side

    let newProjectElLowerRightCon = document.createElement("div");
    newProjectElLowerRightCon.classList.add("projectElRightBtnCon");

    let projectTaskIcon = document.createElement("div");
    projectTaskIcon.classList.add("projectTaskIcon", "smallProjectElBtn");

    let projectTaskNumText = document.createElement("div");
    projectTaskNumText.classList.add("projectTaskNumText");
    projectTaskNumText.textContent = `Tasks: ${projectArray[projectArrayNum].TaskList.length}`;

    newProjectElLowerRightCon.appendChild(projectTaskIcon);
    newProjectElLowerRightCon.appendChild(projectTaskNumText);

    newProjectElRight.appendChild(newProjectElUpperRightCon);
    newProjectElRight.appendChild(newProjectElLowerRightCon);

    // appending all

    newProjectEl.appendChild(newProjectElLeft);
    newProjectEl.appendChild(newProjectElRight);

    newProjectElCon.appendChild(newProjectEl);

    return newProjectElCon;
  },
};

const getValueElByForm = {
  forProject: function () {
    return {};
  },
  forTask: function () {},
};

export { createFinalPageObject, createAndAppendChildren, loader };
