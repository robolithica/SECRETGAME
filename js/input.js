const keysPressed = {};

window.addEventListener("keydown", function(event){

    keysPressed[event.key] = true;

});


function consumeKey(key){

    if(keysPressed[key]){

        keysPressed[key] = false;
        return true;

    }

    return false;

}
