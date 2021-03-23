$(document).ready(function () {
  $("button#green").click(function () {
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function () {
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function () {
    $("body").addClass("red-background");
  });
});

var number = 1;
var number2 = 2;

function add(number1, number2) {
  var result = number1 + number2;
  return result;
}

var total = add(100, 100);

alert(total);