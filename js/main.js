var answer_1 = document.getElementById('answer_1');
var answer_2 = document.getElementById('answer_2');
var answer_3 = document.getElementById('answer_3');
var answer_4 = document.getElementById('answer_4');
var answer_5 = document.getElementById('answer_5');
var answer_6 = document.getElementById('answer_6');
var answer_7 = document.getElementById('answer_7');
var answer_8 = document.getElementById('answer_8');
var answer_9 = document.getElementById('answer_9');
var answer_10 = document.getElementById('answer_10');

let your_points = document.getElementById('your__points');
let questions = [];
let points_score = 0;
let good_score = document.getElementById('good');
let bed_score = document.getElementById('bed');
// let send_poits = document.getElementById('btn');
// function func(){
//   // points_score = 11;
//   if (points_score <= 56) {
//     good_score.value = points_score;
//   }else {
//     bed_score.value = points_score;
//   }
// }
// send_poits.addEventListener('click', func);

// $('.points__input').on('click', function() {
//   if (points_score >= 56) {
//     good_score.innerHTML = points_score;
//   }else {
//     bed_score.innerHTML = points_score;
//   }
// })


$(".menu a, .go-top").on("click", function (event){
  event.preventDefault();
  var id = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 500);
});

$(".points__input .check__points a, .go-top").on("click", function (event){
  event.preventDefault();
  var id = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
});

//11111111111111111//////////////////////////////////////////////////////////////

function its_false(question_num) {
  if (questions.includes(question_num) != true){
    $('#answer_'+question_num+'_false').addClass('input--active');
    questions.push(question_num);
  }
}

function its_true(question_num) {
  if (questions.includes(question_num) != true) {
    points_score = points_score +  10;
    questions.push(question_num);
    $('#answer_'+question_num+'_true').addClass('input--active');
  }
}

// function switch__pages(url){
//   history.pushState({}, '', url);
// }

function points__func() {
  $('#show__points').addClass('points__show__page');
  $('.the__points').addClass('your__points');
  $('.test').addClass('test--hide');
  $('.top_title').addClass('top_title--hide');
  $('.nav__items').addClass('nav__items--hide');
  if (points_score >= 56) {
    good_score.innerHTML = points_score;
    bed_score.innerHTML = '';
  }else {
    good_score.innerHTML = '';
    bed_score.innerHTML = points_score;
  }
}

$('.home').on('click', function() {
  $('#show__points').removeClass('points__show__page');
  $('.the__points').removeClass('your__points');
  $('.nav__item-link--anactive').removeClass('nav__item-link');
  $('.test').removeClass('test--hide');
  $('.top_title').removeClass('top_title--hide');
  $('.nav__items').removeClass('nav__items--hide');
 })