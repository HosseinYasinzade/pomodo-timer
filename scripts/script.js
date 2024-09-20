const body = document.querySelector("body");
let MinuteInput = document.querySelector(".task_minute");
let secondeInput = document.querySelector(".task_seconde");
const btn = document.querySelector(".set_btn");
const timer = document.querySelector(".timer");
const title = document.querySelector(".task-paragraph");

const setTimer = (min, sec) => {
  timer.textContent = `${min} : ${sec}`;
};

const startTimer = () => {
  let min = Number(MinuteInput.value);
  let sec = Number(secondeInput.value);

  if (sec <= 0 && min <= 0) {
    clearInterval(intervalId);
    title.textContent = "Time End";
    return;
  }

  if (sec === 0) {
    min--;
    sec = 59;
  } else {
    sec--;
  }

  MinuteInput.value = min;
  secondeInput.value = sec;
  timer.textContent = `${min} : ${sec}`;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    secondeInput.value > 60 ||
    MinuteInput.value < 0 ||
    secondeInput.value < 0 ||
    MinuteInput.value === "" ||
    secondeInput.value === ""
  ) {
    body.style.backgroundColor = "red";
    timer.style.color = "red";
    MinuteInput.value = "";
    secondeInput.value = "";
    title.style.color = "red";
    title.textContent = "Please enter valid time ....";
  } else {
    body.style.backgroundColor = "#6a1b9a";
    timer.style.color = "#0288d1";
    title.textContent = "";
    setTimer(MinuteInput.value, secondeInput.value);
    setInterval(startTimer, 1000);
  }
});
