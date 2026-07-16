class Player {

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
