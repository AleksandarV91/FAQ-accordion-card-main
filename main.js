const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      btn.classList.toggle("rotate");
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
