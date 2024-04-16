const menulist = document.querySelector(".menulist")
const menuIcon = document.querySelector(".menuIcon")

menuIcon.addEventListener("click", function () {
  menulist.classList.toggle("show");
  menuIcon.classList.toggle("show");
  document.body.classList.toggle("overFlowHidden")
  document.querySelector(".menuIcon").classList.toggle("cross")
})
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 2000) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})