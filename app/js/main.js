var answer_1 = document.getElementById('answer_1');
var answer_2 = document.getElementById('answer_2');
var answer_3 = document.getElementById('answer_3');
var answer_4 = document.getElementById('answer_4');
var int = document.getElementById('in');
var True = true;
var False = false;

function its_false(param) {
  if (answer_1 == True) {
    False = True;
  }
  else{
    True = False;
  }
  param.innerHTML = False;
}

function its_true(param) {
  if (answer_1 == False) {
    True = False;
  }
  else{
    False = True;
  }
  param.innerHTML = True;
}

///////////////////////////////////////////////////////////

var True_2 = true;
var False_2 = false;

function its_false_2(param) {
  if (answer_2 == True_2) {
    False_2 = True_2;
  }
  else{
    True_2 = False_2;
  }
  param.innerHTML = False_2;
}

function its_true_2(param) {
  if (answer_2 == False_2) {
    True_2 = False_2;
  }
  else{
    False_2 = True_2;
  }
  param.innerHTML = True_2;
}

///////////////////////////////////////////////////////////

var True_3 = true;
var False_3 = false;

function its_false_3(param) {
  if (answer_3 == True_3) {
    False_3 = True_3;
  }
  else{
    True_3 = False_3;
  }
  param.innerHTML = False_3;
}

function its_true_3(param) {
  if (answer_3 == False_3) {
    True_3 = False_3;
  }
  else{
    False_3 = True_3;
  }
  param.innerHTML = True_3;
}

///////////////////////////////////////////////////////////

var True_4 = true;
var False_4 = false;

function its_false_4(param) {
  if (answer_4 == True_4) {
    False_4 = True_4;
  }
  else{
    True_4 = False_4;
  }
  param.innerHTML = False_4;
}

function its_true_4(param) {
  if (answer_4 == False_4) {
    True_4 = False_4;
  }
  else{
    False_4 = True_4;
  }
  param.innerHTML = True_4;
}

///////////////////////////////////////////////////////////
