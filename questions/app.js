
// traversing the dom

// const open = document.querySelector('.plus-icon');
// const close = document.querySelector('.minus-icon');
//
// const btns =document.querySelectorAll('.question-btn')
//
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//
//     // if (question.classList.contains('show-text')) {
//     //   question.classList.remove('show-text')
//     // } else {
//     //   question.classList.add('show-text')
//     // }
//   })
// })

// //using selectors inside the element

const question = document.querySelectorAll('.question');

question.forEach(function(e) {

  const btn = e.querySelector('.question-btn')

  btn.addEventListener('click', function () {
    question.forEach(function (item) {if(item !== e){ item.classList.remove('show-text')}})
    e.classList.toggle('show-text')
  })
});









// open.addEventListener('click', function () {
//   question.classList.add('show-text')
// })
//
// close.addEventListener('click', function () {
//   question.classList.remove('show-text')
// })
