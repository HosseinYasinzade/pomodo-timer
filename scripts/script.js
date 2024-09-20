const body = document.querySelector("body");
let MinuteInput = document.querySelector(".task_minute").value;
let secondeInput = document.querySelector(".task_seconde").value;
const btn = document.querySelector(".set_btn");
const timer = document.querySelector(".timer");
const title = document.querySelector(".task-paragraph");

let intervalId;
let minute = Number(MinuteInput);
let seconde = Number(secondeInput);

const setTimer = (min, sec) => {
  timer.textContent = `${min} : ${sec}`;
};

const startTimer = () => {
  if (seconde <= 0 && minute <= 0) {
    clearInterval(intervalId);
    title.textContent = "Time End";
    return;
  }

  if (seconde === 0) {
    minute--;
    seconde = 59;
  } else {
    seconde--;
  }

  timer.textContent = `${minute} : ${seconde}`;
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
    setTimer(minute, seconde);

    intervalId = setInterval(startTimer, 1000);
  }
});
