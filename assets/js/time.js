let ret = "";

function createTime(duration) {
  // Hours, minutes and seconds
  var hrs = Math.floor((duration / 3600));
  var mins = Math.floor(((duration % 3600) / 60))
  var secs = Math.floor(duration % 60);

  // Output like "1:01" or "4:03:59" or "123:03:59"
  

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return console.log(ret);
}

let intervalCount = document.querySelector("#intervals");
const habitName = document.querySelector(".habit-input");
const soundChoice = document.querySelector("#sound");
let dataCounter = 0;

const formHandler = () => {
  let numRegex = /\d/;
  let inputVal = habitName.value;
  let numCheck = inputVal[inputVal.search(numRegex)];

  if (!inputVal || numCheck) {
    alert("Please fill in the form. No numbers should be included!");
    return;
  }

  let habitObj = {
    id: dataCounter,
    name: habitName.value,
    sound: soundChoice.value,
    interval: intervalCount.value,
  };

  console.log(habitObj);
  createTime(intervalCount.value);
  createHabit(habitObj);
  dataCounter++;
  resetForm();
};

const resetForm = () => {
  habitName.value = "";
  intervalCount.value = 0;
};

let habits = [];
const firstCol = document.querySelector("#first-column");
let notifSound;
const createHabit = (habitObj) => {
  const listItem = document.createElement("li");
  listItem.className =
    "habit-task has-background-primary-light has-text-info is-size-4 p-1";
  listItem.setAttribute("data-habit", dataCounter);
  listItem.innerHTML = `<h3 class="habit-item-title title is-size-4 has-text-link">${habitObj.name}</h3>
  <div class="card is-size-5">
    <div class="card-content has-text-centered">
      
      <span class="habit-item-sets"> ${ret}</span><span>Time</span>
    </div>
  </div>
  <footer class="card-footer is-size-5">
  <audio id="notif-sound" controls src="/assets/audio/videoplayback.weba">
  </audio>
    <a class="delete-habit card-footer-item" data-habit="${dataCounter}">Delete</a>
  </footer>`;
  firstCol.appendChild(listItem);

  habits.push(habitObj);
  resetForm();

  let soundInterval = habitObj.interval * 1000
  console.log(soundInterval)
  notifSound = document.querySelector('audio')
  console.log(notifSound)
  notifSound.addEventListener('play', audioHandler(soundInterval))
};

const audioHandler = (soundInterval) => {

  console.log(soundInterval)
  setInterval(() => {
    notifSound.play()

  }, soundInterval);

}




const addBtn = document.querySelector("#add-habit");
addBtn.addEventListener("click", formHandler);


