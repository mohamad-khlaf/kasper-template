// our skill fill prog
let sectionSkills = document.querySelector(".skills");
let spans = document.querySelectorAll(".holder span");

window.onscroll = function () {
  if (window.scrollY >= sectionSkills.offsetTop + 50) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
