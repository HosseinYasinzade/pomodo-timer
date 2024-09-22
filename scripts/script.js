const body = document.querySelector("body");
const btn = document.querySelector(".set_btn");
const timer = document.querySelector(".timer");
const title = document.querySelector(".task-paragraph");
const titleInput = document.querySelector(".task_title");
const restBtn = document.querySelector(".rest");

let intervalId;
let restInvalid;

const setTimer = (min, sec) => {
  timer.textContent = `${min} : ${sec}`;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(intervalId);
  clearInterval(restInvalid);

  btn.disabled = true;
  restBtn.disabled = false;

  let MinuteInput = document.querySelector(".task_minute").value;
  let secondeInput = document.querySelector(".task_seconde").value;
  let minute = Number(MinuteInput);
  let seconde = Number(secondeInput);

  if (
    seconde > 60 ||
    minute < 0 ||
    seconde < 0 ||
    minute === "" ||
    seconde === ""
  ) {
    btn.disabled = false;

    body.style.backgroundColor = "red";
    timer.style.color = "red";
    MinuteInput.value = "";
    secondeInput.value = "";
    title.style.color = "red";
    title.textContent = "Please enter valid time ....";
  } else {
    body.style.backgroundColor = "#6a1b9a";
    timer.style.color = "#0288d1";
    title.textContent = titleInput.value;

    setTimer(minute, seconde);

    intervalId = setInterval(() => {
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
    }, 1000);
  }
});

restBtn.addEventListener("click", (e) => {
  e.preventDefault();

  clearInterval(intervalId);
  clearInterval(restInvalid);

  restBtn.disabled = true;
  btn.disabled = false;

  title.textContent = "";

  setTimer(5, 0);
  let minute = 5;
  let seconde = 0;
  restInvalid = setInterval(() => {
    if (seconde <= 0 && minute <= 0) {
      clearInterval(restInvalid);
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
  }, 1000);
});
