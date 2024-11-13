const containerTimer = document.querySelector(".containerTimer");
const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const getCurrentTime = () => {
  const now = new Date();
  return {
    dayWeek: now.getDay(),
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    hours: now.getHours().toString().padStart(2, "0"),
    min: now.getMinutes().toString().padStart(2, "0"),
    sec: now.getSeconds().toString().padStart(2, "0"),
  };
};

const formatDate = ({ day, month, year }) => {
  return `${day}/${month}/${year}`;
};

const formatTime = ({ hours, min, sec }) => {
  return `${hours}:${min}:${sec}`;
};

const formatWeekday = (dayWeek) => {
  if (dayWeek >= 0 && dayWeek < weekdays.length) {
    return weekdays[dayWeek];
  } else {
    return `Dia inválido`;
  }
};

const createTimerElement = (className, text) => {
  const element = document.createElement("p");
  element.classList.add(className);
  element.innerHTML = text;
  return element;
};

const updateTimerElement = (
  dayElement,
  timerElement,
  dateElement,
  currentTime
) => {
  dayElement.textContent = formatWeekday(currentTime.dayWeek);
  timerElement.textContent = formatTime(currentTime);
  dateElement.textContent = formatDate(currentTime);
};

const updateTimerDisplay = () => {
  const currentTime = getCurrentTime();
  const timerFirstLine = document.createElement("div");
  timerFirstLine.classList.add("timerFirstLine");

  const dayElement = createTimerElement("day", "");
  const timerElement = createTimerElement("timer", "");

  timerFirstLine.appendChild(dayElement);
  timerFirstLine.appendChild(timerElement);

  const dateElement = createTimerElement("date", "");

  containerTimer.innerHTML = ``;
  containerTimer.appendChild(timerFirstLine);
  containerTimer.appendChild(dateElement);

  updateTimerElement(dayElement, timerElement, dateElement, currentTime);
};

setInterval(updateTimerDisplay, 1000);
updateTimerDisplay();
