
var el, $body;

el = document;
$body = el.body;

el.addEventListener("keydown", onkeydown, true);
el.addEventListener("keyup", onkeyup, true);

function onkeydown(e) {
  console.log(e.which);
  var key_pressed = el.getElementById("key-" + e.which);
  if (key_pressed !== null) {
    $body.classList.add("key-pressed");
    key_pressed.classList.add("pressed");
  }
  if (e.shiftKey) {
    $body.classList.add("shift-pressed");
  } 
}

function onkeyup(e) {
  // console.log(e.which); 
  var key_pressed = el.getElementById("key-" + e.which);
  if (e.which == 16) {
    $body.classList.remove("shift-pressed");
  }
  if (key_pressed !== null) {
    key_pressed.classList.remove("pressed");
    if (el.querySelectorAll(".pressed").length == 0) {
      $body.classList.remove("key-pressed");
    }
  }
}
