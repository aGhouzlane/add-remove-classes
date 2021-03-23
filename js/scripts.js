$(document).ready(function () {
  $("#green").click(function () {
    $("ul").append("<li>Hello!</li>");
  });

  $("#yellow").click(function () {
    $("ul").append("<li>Goodbye!</li>");
  });

  $("#red").click(function () {
    $("ul").prepend("<li>Stop copying me!</li>");
  });
});
