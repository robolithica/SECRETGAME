const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Internal resolution
canvas.width = 320;
canvas.height = 288;

// Fill background
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);

// Draw test text
ctx.fillStyle = "white";
ctx.font = "16px monospace";
ctx.fillText("Retro RPG Engine",50,40);

// Draw a player placeholder
ctx.fillStyle = "red";
ctx.fillRect(150,130,16,16);
