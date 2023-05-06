let your_points = document.getElementById('your__points');
let questions = [];
let points_score = 0;
let good_score = document.getElementById('good');
let bed_score = document.getElementById('bed');


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