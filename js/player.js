class Player {

    update(){

    if(consumeKey("ArrowUp")){
        this.y -= 16;
    }

    if(consumeKey("ArrowDown")){
        this.y += 16;
    }

    if(consumeKey("ArrowLeft")){
        this.x -= 16;
    }

    if(consumeKey("ArrowRight")){
        this.x += 16;
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
