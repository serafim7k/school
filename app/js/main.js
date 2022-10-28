var c = document.getElementById('answer_1')
var b = document.getElementById('point')
// var point = "0";
var True = true
var False = false

function its_false(param) {
  if (c == True) {
    False = True;
  }
  else{
    True = False;
  }
  param.innerHTML = False;
}

function its_true(param) {
  if (c == False) {
    True = False;
  }
  else{
    False = True;
  }
  param.innerHTML = True;
}

// function points(param) {
// if (c == True) {
//   point = "100";
// }

//   param.innerHTML = point;
// }
