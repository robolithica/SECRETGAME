const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 288;

const player = new Player();

function gameLoop(){

    ctx.fillStyle = "black";
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "white";
    ctx.font = "16px monospace";
    ctx.fillText(
        "Gospel of Decay",
        50,
        40
    );

    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();
