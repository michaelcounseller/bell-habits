let timesCont = document.querySelector("#times");
let setCont = document.querySelector("#sets");

let createNums = () => {
  for (let i = 0; i <= 100; i++) {
    const numCont1 = document.createElement("option"),
      numCont2 = document.createElement("option");
    numCont1.text = i;
    numCont2.text = i;
    timesCont.appendChild(numCont1);
    setCont.appendChild(numCont2);
  }
};
createNums();

let exeInput = document.querySelector("input");
let editCheck = document.querySelector("#exercise-input-list");
let dataCounter = 0;
fromHandler = () => {
  let numRegex = /\d/;
  let inputVal = exeInput.value;
  let numCheck = inputVal[inputVal.search(numRegex)];

  if (!inputVal || numCheck) {
    alert("Please fill in the form. No numbers should be included!");
    return;
  }

  let isEdit = editCheck.hasAttribute("data-exercise");

  if (isEdit) {
    let exeAtt = editCheck.getAttribute("data-exercise");
    console.log(exeAtt);
    completeEdit(exeAtt);
    resetForm();
  } else {
    let exeObj = {
      id: dataCounter,
      name: exeInput.value,
      sets: setCont.value,
      status: "in progress",
    };

    console.log(exeObj);
    createExercise(exeObj);
    dataCounter++;
    resetForm();
  }
};
let exercises = [];
const firstCol = document.querySelector("#first-column");

let createExercise = (exeObj) => {
  const listItem = document.createElement("li");
  listItem.className =
    "exercise-task has-background-primary-light has-text-info is-size-4 p-1";
  listItem.setAttribute("data-exercise", dataCounter);
  listItem.innerHTML = `<h3 class="exercise-item-title title is-size-4 has-text-link">${exeObj.name}</h3>
  <div class="card is-size-5">
    <div class="card-content has-text-centered">
      
      <span class="exercise-item-sets"> ${exeObj.sets}</span><span> Sets</span>
    </div>
  </div>
  <footer class="card-footer is-size-5">
    <a class="edit-exercise card-footer-item" data-exercise="${dataCounter}">Edit</a>
    <a class="delete-exercise card-footer-item" data-exercise="${dataCounter}">Delete</a>
  </footer>`;
  firstCol.appendChild(listItem);

  exercises.push(exeObj);
  saveExe(exercises);
  resetForm();
};

let resetForm = () => {
  exeInput.value = "";
  timesCont.value = 0;
  setCont.value = 0;
};

let buttonHandler = (event) => {
  event = event.target;
  let exeAtt = event.getAttribute("data-exercise");
  let exeSelected = document.querySelector(`li[data-exercise="${exeAtt}"]`);

  if (event.matches(".delete-exercise")) {
    deleteBtn(exeSelected, exeAtt);
  } else if (event.matches(".edit-exercise")) {
    editBtn(exeSelected, exeAtt);
  } else {
    return;
  }
};

let deleteBtn = (exeSelected, exeAtt) => {
  exeSelected.remove();
  console.log(exeAtt);

  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i].id === parseInt(exeAtt)) {
      console.log(exercises[i].id); // 0
      console.log(exeAtt); // 1
      //The condition shouldn't have been met. Now below itll filter out everything but index 0
      let updatedExe = exercises.filter(
        (exercise) => exercise.id !== exercises[i].id
      );
      console.log(updatedExe);
      exercises = updatedExe;
      break;
    }
  }

  console.log(exercises);
};

let editBtn = (exeSelected, exeAtt) => {
  console.log(exeAtt);
  let exeName = exeSelected.querySelector(".exercise-item-title");
  let exeSelectTimes = exeSelected.querySelector(".exercise-item-times");
  let exeSelectSets = exeSelected.querySelector(".exercise-item-sets");

  exeSelectSets = parseInt(exeSelectSets.textContent);
  exeSelectTimes = parseInt(exeSelectTimes.textContent);
  exeInput.value = exeName.textContent;
  timesCont.value = exeSelectTimes;
  setCont.value = exeSelectSets;

  editCheck.setAttribute("data-exercise", exeAtt);
  addBtn.textContent = "Edit Exercise";
};

let completeEdit = (exeAtt) => {
  console.log(exeAtt);
  let exeSelected = document.querySelector(`li[data-exercise="${exeAtt}"`);

  let exeName = exeSelected.querySelector(".exercise-item-title");
  let exeSelectTimes = exeSelected.querySelector(".exercise-item-times");
  let exeSelectSets = exeSelected.querySelector(".exercise-item-sets");

  exeName.textContent = exeInput.value;
  exeSelectTimes.textContent = timesCont.value;
  exeSelectSets.textContent = setCont.value;
  console.log(exercises);
  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i].id == exeAtt) {
      exercises[i].name = exeName.textContent;
      exercises[i].times = timesCont.value;
      exercises[i].sets = setCont.value;
      console.log(exercises);
    }
  }

  editCheck.removeAttribute("data-exercise");
  addBtn.textContent = "Add Exercise";
  saveExe(exercises);
};

let saveExe = (exercises) => {
  localStorage.setItem("exercises", JSON.stringify(exercises));
};

let loadExe = () => {
  let savedExes = localStorage.getItem("exercises");
  if (!savedExes) {
    exercises = [];
    return false;
  }

  savedExes = JSON.parse(savedExes);

  for (let i = 0; i < savedExes.length; i++) {
    createExercise(savedExes[i]);
  }
};

loadExe();

const addBtn = document.querySelector("button");
addBtn.addEventListener("click", fromHandler);

const kanban = document.querySelector("#kanban-section");

kanban.addEventListener("click", buttonHandler);
