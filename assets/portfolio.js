const theme = document.querySelector(".theme");
const sectionNavBtns = document.querySelectorAll(".section-nav > div");
const tabs = document.querySelectorAll(".tab");

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme.classList.contains("fa-moon")) {
    theme.classList.remove("fa-moon");
    theme.classList.add("fa-sun");
  } else {
    theme.classList.remove("fa-sun");
    theme.classList.add("fa-moon");
  }
});

sectionNavBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sectionNavBtns.forEach((btn) => {
      btn.classList.remove("activebtn");
    });
    btn.classList.add("activebtn");
    tabs.forEach((tab) => {
      tab.classList.remove("activetab");
    });
    const tabType = btn.dataset.type;
    document.getElementById(tabType).classList.add("activetab");
  });
});
