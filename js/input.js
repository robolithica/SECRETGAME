const keys = {};

window.addEventListener("keydown", function(event){
    keys[event.key] = true;
});

window.addEventListener("keyup", function(event){
    keys[event.key] = false;
});
