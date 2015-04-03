

var el, $body;

el = document;
$body = el.body;

el.addEventListener("keydown", onkeydown, true);
el.addEventListener("keyup", onkeyup, true);

function onkeydown(e){
    if (e.shiftKey) {
        $body.classList.add("shift_is_pressed");
    } 
}            

function onkeyup(e){
    $body.removeAttribute("class");
}            
