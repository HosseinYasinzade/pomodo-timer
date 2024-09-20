const body = document.querySelector("body");
const titleInput = document.querySelector(".task_title");
const MinuteInput = document.querySelector(".task_minute");
const secondeInput = document.querySelector(".task_seconde");
const btn = document.querySelector(".start_btn");
const timer = document.querySelector(".timer");
const title = document.querySelector(".task-paragraph");
const form = document.querySelector(".task");

const setTimer = (min, sec) => {
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
    title.color = "#0288d1";
    setTimer(MinuteInput.value, secondeInput.value);
  }
});
