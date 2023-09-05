const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

const handleEnter = (event) => {
  event.target.classList.add("trigger-enter");
  setTimeout(() => {
    event.target.classList.add("trigger-enter-active");
  }, 150);
};

const handleLeave = (event) => {
  event.target.classList.remove("trigger-enter");
  setTimeout(() => {
    event.target.classList.remove("trigger-enter-active");
  }, 150);
};

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
