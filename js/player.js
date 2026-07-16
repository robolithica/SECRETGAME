class Player {

    update(){

    if(keys["ArrowUp"]){
        this.y -= 16;
        keys["ArrowUp"] = false;
    }

    if(keys["ArrowDown"]){
        this.y += 16;
        keys["ArrowDown"] = false;
    }

    if(keys["ArrowLeft"]){
        this.x -= 16;
        keys["ArrowLeft"] = false;
    }

    if(keys["ArrowRight"]){
        this.x += 16;
        keys["ArrowRight"] = false;
    }

}

    constructor(){

        this.x = 150;
        this.y = 130;

        this.width = 16;
        this.height = 16;

        this.sprite = new Image();
        this.sprite.src = "sprites/player.png";

    }


    draw(ctx){

        ctx.drawImage(
            this.sprite,
            this.x,
            this.y,
            this.width,
            this.height
        );

    }

}
