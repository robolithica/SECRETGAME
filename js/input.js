const keys = {};
const pressedKeys = {};

window.addEventListener("keydown", function(event){

    if (!keys[event.key]) {
        pressedKeys[event.key] = true;
    }

    keys[event.key] = true;

});


window.addEventListener("keyup", function(event){

    keys[event.key] = false;

});


function consumeKey(key){

    if (pressedKeys[key]){

        pressedKeys[key] = false;
        return true;

    }

    return false;

}
