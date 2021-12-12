const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    btn.classList.add("rotate");
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     btn.classList.toggle("rotate");
//     let question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
