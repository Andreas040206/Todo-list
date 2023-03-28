import {
  btnActivation,
  currentPageChecker,
  createProject,
  editProject,
  calcDaysIntil,
} from "./controller";
import homeIcon from "./img/Icons/homeIcon.png";
import taskIcon from "./img/Icons/taskIcon.png";
import projectIcon from "./img/Icons/projectIcon.png";
import { projectArray } from "./ObjectCreator.js";
import priorityHighIcon from "./img/Icons/priorityHighIcon.png";
import priorityLowIcon from "./img/Icons/priorityLowIcon.png";
import priorityMediumIcon from "./img/Icons/priorityMediumIcon.png";
import closeIcon from "./img/Icons/closeIcon.png";
import { sortBy } from "lodash";

const loader = function () {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  document.body.appendChild(createFinalPageObject());
};

const createFinalPageObject = function () {
  const pageContent = document.createElement("div");
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

  headerText.addEventListener("click", function () {
    btnActivation.localStorage.load();
  });

  headerUpper.appendChild(headerText);

  let loginBtn = document.createElement("button");
  loginBtn.classList.add("loginBtn");
  loginBtn.textContent = "Sign in";

  loginBtn.addEventListener("click", function () {
    btnActivation.localStorage.save();
  });

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
  projectIconImg.classList.add("sidebarIcon", "projectIcon");

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

  createAndAppendChildren.forSpecificProjectPage(
    currentPageChecker,
    specificProjectContent
  );

  return specificProjectContent;
};

const createAndAppendChildren = {
  forSidebarProjectlist: function (Array, parrent) {
    let el = document.createElement("div");
    el.classList.add("projectDropDownCon");

    let projectBtnUnderline = document.createElement("div");
    projectBtnUnderline.classList.add("projectBtnUnderline");

    el.appendChild(projectBtnUnderline);
    for (let i = 0; i < Array.length; i++) {
      let newProjectBtn = document.createElement("button");
      newProjectBtn.classList.add("projectDropDownText");
      newProjectBtn.textContent = `‣ ${Array[i].name}`;

      newProjectBtn.addEventListener("click", function () {
        let btnNum = i;
        btnActivation.pageDirections.specificProjectBtnActivated(btnNum);
      });

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
  forSpecificProjectPage: function (projectArrayNum, parrent) {
    let header = this.forCreatingProjectEl(projectArrayNum);
    header.classList.add("specificProjectHeader");
    parrent.appendChild(header);

    parrent.appendChild(createAndAppendChildren.sortBtn(projectArrayNum));

    for (let i = 0; i < projectArray[projectArrayNum].TaskList.length; i++) {
      parrent.appendChild(
        createAndAppendChildren.forCreatingTaskEl(projectArrayNum, i)
      );
    }

    const addBtn = document.createElement("btn");
    addBtn.classList.add("projectHeaderCon", "addProjectBtn", "taskAddBtn");

    let addBtnIcon = document.createElement("div");
    addBtnIcon.classList.add(
      "projectAddBtnIcon",
      "smallProjectElBtn",
      "taskAddBtnIcon"
    );

    addBtn.appendChild(addBtnIcon);

    addBtn.addEventListener("click", function () {
      btnActivation.projectArrayEdits.taskArrayAdd(projectArrayNum);
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
  forCreatingTaskEl: function (projectArrayNum, taskInfoEl) {
    const taskCon = document.createElement("div");
    taskCon.classList.add("taskCon");

    const taskEl = document.createElement("div");
    taskEl.classList.add("taskEl");

    // creating the left side
    const leftSide = document.createElement("div");
    leftSide.classList.add("taskElSideCon");

    const titleEl = document.createElement("div");
    titleEl.classList.add("taskHeaderEl");

    let titleText = document.createElement("div");
    titleText.textContent =
      projectArray[projectArrayNum].TaskList[taskInfoEl].name;

    let extendBtn = document.createElement("div");
    extendBtn.classList.add("smallProjectElBtn", "extendBtn");

    let i = 0;
    extendBtn.addEventListener("click", function () {
      i++;
      if (i % 2 === 1) {
        taskEl.style.height = "220px";
        taskCon.style.height = "235px";
        extendBtn.style.rotate = "180deg";
      } else {
        taskEl.style.height = "115px";
        taskCon.style.height = "130px";
        extendBtn.style.rotate = "0deg";
      }
    });

    titleEl.appendChild(titleText);
    titleEl.appendChild(extendBtn);

    let descriptionEl = document.createElement("div");
    descriptionEl.classList.add("taskDescriptionText");
    descriptionEl.textContent =
      projectArray[projectArrayNum].TaskList[taskInfoEl].description;

    leftSide.appendChild(titleEl);
    leftSide.appendChild(descriptionEl);

    // creating the right side
    const rightSide = document.createElement("div");
    rightSide.classList.add("taskElSideCon");

    const rightSideUpper = document.createElement("div");
    rightSideUpper.classList.add("rightSideUpper");

    let priorityBox = new Image();
    if (projectArray[projectArrayNum].TaskList[taskInfoEl].priority === "low") {
      priorityBox.src = priorityLowIcon;
    } else if (
      projectArray[projectArrayNum].TaskList[taskInfoEl].priority === "high"
    ) {
      priorityBox.src = priorityHighIcon;
    } else {
      priorityBox.src = priorityMediumIcon;
    }
    priorityBox.classList.add("priorityBox");

    let daysLeftEl = document.createElement("div");
    daysLeftEl.classList.add("daysLeftEl");
    let daysLeft = calcDaysIntil(
      projectArray[projectArrayNum].TaskList[taskInfoEl].deadline
    );

    if (daysLeft < 0) {
      daysLeftEl.style.color = "red";
      daysLeftEl.textContent = `${daysLeft * -1} Days ago!`;
    } else if (daysLeft === 0) {
      daysLeftEl.style.color = "red";
      daysLeftEl.textContent = `Today!`;
    } else if (daysLeft === 1) {
      daysLeftEl.style.color = "red";
      daysLeftEl.textContent = `Tomorrow`;
    } else if (daysLeft < 10) {
      daysLeftEl.style.color = "red";
      daysLeftEl.textContent = `${daysLeft} Days`;
    } else if (daysLeft <= 30) {
      daysLeftEl.textContent = `${daysLeft} Days`;
    } else if (daysLeft < 60) {
      daysLeftEl.textContent = `1 Month`;
    } else if (daysLeft < 365) {
      daysLeftEl.textContent = `${Math.floor(daysLeft / 30)} Months`;
    } else if (daysLeft < 730) {
      daysLeftEl.textContent = `1 Year`;
    } else if (daysLeft >= 730) {
      daysLeftEl.textContent = `${Math.floor(daysLeft / 365)} Years`;
    }

    const editAndDeleteBtnCon = document.createElement("div");
    editAndDeleteBtnCon.classList.add("editAndDeleteBtnCon");

    let deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("deleteProjectBtn", "smallProjectElBtn");
    deleteProjectBtn.addEventListener("click", function () {
      btnActivation.projectArrayEdits.deleteTaskBtn(
        projectArrayNum,
        taskInfoEl
      );
    });

    let editProjectBtn = document.createElement("button");
    editProjectBtn.classList.add("editProjectBtn", "smallProjectElBtn");
    editProjectBtn.addEventListener("click", function () {
      btnActivation.projectArrayEdits.editTaskBtn(projectArrayNum, taskInfoEl);
    });

    editAndDeleteBtnCon.appendChild(editProjectBtn);
    editAndDeleteBtnCon.appendChild(deleteProjectBtn);

    rightSideUpper.appendChild(priorityBox);
    rightSideUpper.appendChild(daysLeftEl);
    rightSideUpper.appendChild(editAndDeleteBtnCon);

    const rightSideLower = document.createElement("div");
    rightSideLower.classList.add("rightSideLower");

    let doDate = document.createElement("div");
    doDate.classList.add("daysLeftEl");
    doDate.textContent = `Deadline: ${projectArray[projectArrayNum].TaskList[taskInfoEl].deadline}`;

    rightSideLower.appendChild(doDate);

    rightSide.appendChild(rightSideUpper);
    rightSide.appendChild(rightSideLower);

    // appending both sides

    taskEl.appendChild(leftSide);
    taskEl.appendChild(rightSide);

    taskCon.appendChild(taskEl);

    return taskCon;
  },
  sortBtn: function (projectArrayNum) {
    const sortBtn = document.createElement("div");
    sortBtn.classList.add("sortBtn");

    let upDown = 0;

    let sortByBtn = document.createElement("div");
    sortByBtn.classList.add("sortByBtn");
    sortByBtn.textContent = "▲ Sort by";
    sortByBtn.style.paddingLeft = "8px";

    sortByBtn.addEventListener("click", function () {
      if (upDown % 2 === 0) {
        sortBtn.style.height = "120px";
        sortByBtn.textContent = "▼ Sort by";
      } else {
        sortBtn.style.height = "40px";
        sortByBtn.textContent = "▲ Sort by";
      }
      upDown++;
    });

    let sortNumBtn = document.createElement("div");
    sortNumBtn.classList.add("sortByBtn", "sortByBtnNoAr");
    sortNumBtn.textContent = "Date";
    sortNumBtn.addEventListener("click", function () {
      btnActivation.projectArrayEdits.sortedBy(projectArrayNum, "deadline");
      sortNumBtn.classList.add("selectedSortByBtn");
      sortPriorityBtn.classList.remove("selectedSortByBtn");
    });

    let sortPriorityBtn = document.createElement("div");
    sortPriorityBtn.classList.add("sortByBtn", "sortByBtnNoAr");
    sortPriorityBtn.textContent = "Priority";
    sortPriorityBtn.addEventListener("click", function () {
      btnActivation.projectArrayEdits.sortedBy(projectArrayNum, "");
      sortPriorityBtn.classList.add("selectedSortByBtn");
      sortNumBtn.classList.remove("selectedSortByBtn");
    });

    sortBtn.appendChild(sortByBtn);
    sortBtn.appendChild(sortNumBtn);
    sortBtn.appendChild(sortPriorityBtn);

    return sortBtn;
  },
};

const getValueByForm = {
  forProject: function (projectNum) {
    const formCon = document.createElement("div");
    formCon.classList.add("formCon");

    let nameInput = document.createElement("input");
    nameInput.addEventListener("change", function () {
      nameInput.style.borderColor = "grey";
    });
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Project name..");
    nameInput.classList.add("nameinput");

    let descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("rows", "4");
    descriptionInput.setAttribute("placeholder", "Project description...");
    descriptionInput.classList.add("descriptionInput");
    descriptionInput.addEventListener("change", function () {
      descriptionInput.style.borderColor = "grey";
    });

    let createBtn = document.createElement("button");
    createBtn.setAttribute("metheod", "get");
    createBtn.classList.add("createBtn");
    createBtn.textContent = "Create";

    createBtn.addEventListener("click", function () {
      if (nameInput.value === "") {
        nameInput.style.borderColor = "red";
        nameInput.setAttribute("placeholder", "Please fill out");
        nameInput.classList.add("notFilled");
      }
      if (descriptionInput.value === "") {
        descriptionInput.style.borderColor = "red";
        descriptionInput.setAttribute("placeholder", "Please fill out");
        descriptionInput.classList.add("notFilled");
      }
      if (descriptionInput.value !== "" && nameInput.value !== "") {
        let obj = {
          description: descriptionInput.value,
          name: nameInput.value,
        };
        if (projectNum !== null && projectNum !== undefined) {
          editProject(obj, projectNum);
        } else {
          createProject(obj);
        }
      }
    });

    if (projectNum !== null && projectNum !== undefined) {
      nameInput.setAttribute("value", projectArray[projectNum].name);
      descriptionInput.textContent = projectArray[projectNum].description;
    }

    let closeBtn = new Image();
    closeBtn.src = closeIcon;
    closeBtn.classList.add("closeBtn");
    closeBtn.addEventListener("click", function () {
      btnActivation.pageDirections.projectBtnActivated();
    });

    formCon.appendChild(nameInput);
    formCon.appendChild(descriptionInput);
    formCon.appendChild(createBtn);
    formCon.appendChild(closeBtn);

    const blurBg = document.createElement("div");
    blurBg.classList.add("blurBg");

    blurBg.appendChild(formCon);

    document.body.appendChild(blurBg);
  },
  forTask: function (projectArrayNum, taskNum) {
    const formCon = document.createElement("div");
    formCon.classList.add("formCon", "taskFormCon");

    let nameInput = document.createElement("input");
    nameInput.addEventListener("change", function () {
      nameInput.style.borderColor = "grey";
    });
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Task name...");
    nameInput.classList.add("nameinput");

    let descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("rows", "4");
    descriptionInput.setAttribute("placeholder", "Task description...");
    descriptionInput.classList.add("descriptionInput");
    descriptionInput.addEventListener("change", function () {
      descriptionInput.style.borderColor = "grey";
    });

    const datePickerCon = document.createElement("div");
    datePickerCon.classList.add("datePickerCon");

    let datePickerLabel = document.createElement("span");
    datePickerLabel.classList.add("formLabel");
    datePickerLabel.textContent = "Deadline: ";

    let datePicker = document.createElement("input");
    datePicker.setAttribute("type", "date");
    datePicker.classList.add("datePicker");
    datePicker.addEventListener("change", function () {
      datePickerLabel.style.color = "grey";
      datePicker.style.color = "#aa51a5";
      datePicker.style.borderColor = "grey";
    });

    datePickerCon.appendChild(datePickerLabel);
    datePickerCon.appendChild(datePicker);

    const priorityCon = document.createElement("div");
    priorityCon.classList.add("datePickerCon");

    let priorityLabel = document.createElement("span");
    priorityLabel.classList.add("formLabel");
    priorityLabel.textContent = "Priority:";

    const prioritybtnCon = document.createElement("div");
    prioritybtnCon.classList.add("prioritybtnCon");

    let priorityValue = "";

    let highBtn = document.createElement("div");
    highBtn.classList.add("highBtn", "priorityBtn");
    highBtn.textContent = "High";

    highBtn.addEventListener("click", function () {
      highBtn.classList.remove("highBtn");
      highBtn.classList.add("highBtnSelected");
      mediumBtn.classList.remove("mediumBtnSelected");
      mediumBtn.classList.add("mediumBtn");
      lowBtn.classList.remove("lowBtnSelected");
      lowBtn.classList.add("lowBtn");

      priorityValue = "high";

      if (priorityLabel.style.color === "red") {
        priorityLabel.style.color = "grey";
      }
    });

    let mediumBtn = document.createElement("div");
    mediumBtn.classList.add("mediumBtn", "priorityBtn");
    mediumBtn.textContent = "Medium";

    mediumBtn.addEventListener("click", function () {
      highBtn.classList.remove("highBtnSelected");
      highBtn.classList.add("highBtn");
      mediumBtn.classList.remove("mediumBtn");
      mediumBtn.classList.add("mediumBtnSelected");
      lowBtn.classList.remove("lowBtnSelected");
      lowBtn.classList.add("lowBtn");

      priorityValue = "medium";

      if (priorityLabel.style.color === "red") {
        priorityLabel.style.color = "grey";
      }
    });

    let lowBtn = document.createElement("div");
    lowBtn.classList.add("lowBtn", "priorityBtn");
    lowBtn.textContent = "Low";

    lowBtn.addEventListener("click", function () {
      highBtn.classList.remove("highBtnSelected");
      highBtn.classList.add("highBtn");
      mediumBtn.classList.remove("mediumBtnSelected");
      mediumBtn.classList.add("mediumBtn");
      lowBtn.classList.remove("lowBtn");
      lowBtn.classList.add("lowBtnSelected");

      priorityValue = "low";

      if (priorityLabel.style.color === "red") {
        priorityLabel.style.color = "grey";
      }
    });

    prioritybtnCon.appendChild(highBtn);
    prioritybtnCon.appendChild(mediumBtn);
    prioritybtnCon.appendChild(lowBtn);

    priorityCon.appendChild(priorityLabel);
    priorityCon.appendChild(prioritybtnCon);

    let createBtn = document.createElement("button");
    createBtn.setAttribute("metheod", "get");
    createBtn.classList.add("createBtn");
    createBtn.textContent = "Create";

    createBtn.addEventListener("click", function () {
      if (nameInput.value === "") {
        nameInput.style.borderColor = "red";
        nameInput.setAttribute("placeholder", "Please fill out");
        nameInput.classList.add("notFilled");
      }
      if (descriptionInput.value === "") {
        descriptionInput.style.borderColor = "red";
        descriptionInput.setAttribute("placeholder", "Please fill out");
        descriptionInput.classList.add("notFilled");
      }
      if (datePicker.value === "") {
        datePicker.style.borderColor = "red";
        datePicker.style.color = "red";
        datePickerLabel.style.color = "red";
      }
      if (priorityValue === "") {
        priorityLabel.style.color = "red";
      }
      if (
        descriptionInput.value !== "" &&
        nameInput.value !== "" &&
        datePicker.value !== "" &&
        priorityValue !== ""
      ) {
        let obj = {
          description: descriptionInput.value,
          name: nameInput.value,
          deadline: datePicker.value,
          priority: priorityValue,
        };
        if (taskNum !== null && taskNum !== undefined) {
          btnActivation.projectArrayEdits.editTask(
            projectArrayNum,
            obj,
            taskNum
          );
        } else {
          btnActivation.projectArrayEdits.createTask(projectArrayNum, obj);
        }
      }
    });

    if (taskNum !== null && taskNum !== undefined) {
      if (projectArray[projectArrayNum].TaskList[taskNum].priority === "high") {
        highBtn.classList.remove("highBtn");
        highBtn.classList.add("highBtnSelected");
        priorityValue = "high";
      } else if (
        projectArray[projectArrayNum].TaskList[taskNum].priority === "low"
      ) {
        lowBtn.classList.remove("lowBtn");
        lowBtn.classList.add("lowBtnSelected");
        priorityValue = "low";
      } else {
        mediumBtn.classList.remove("mediumBtn");
        mediumBtn.classList.add("mediumBtnSelected");
        priorityValue = "medium";
      }
      nameInput.value = projectArray[projectArrayNum].TaskList[taskNum].name;
      descriptionInput.value =
        projectArray[projectArrayNum].TaskList[taskNum].description;
      datePicker.value =
        projectArray[projectArrayNum].TaskList[taskNum].deadline;
    }

    let closeBtn = new Image();
    closeBtn.src = closeIcon;
    closeBtn.classList.add("closeBtn");
    closeBtn.addEventListener("click", function () {
      btnActivation.pageDirections.specificProjectBtnActivated(projectArrayNum);
    });

    formCon.appendChild(nameInput);
    formCon.appendChild(descriptionInput);
    formCon.appendChild(datePickerCon);
    formCon.appendChild(priorityCon);
    formCon.appendChild(createBtn);
    formCon.appendChild(closeBtn);

    const blurBg = document.createElement("div");
    blurBg.classList.add("blurBg");

    blurBg.appendChild(formCon);

    document.body.appendChild(blurBg);
  },
};

export { createFinalPageObject, loader, getValueByForm };
