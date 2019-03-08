var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Haut voiture
ctx.fillStyle = "lightgreen";
ctx.fillRect(120,50,200,50);

// Bas voiture
ctx.fillRect(80,100,280,50);

// Roue gauche
ctx.beginPath();
ctx.strokeStyle = "dark";
ctx.fillStyle = "lightgrey";
ctx.arc(120,180,30,0,Math.PI*2);
ctx.fill();
ctx.stroke();

// Roue droite
ctx.beginPath();
ctx.strokeStyle = "dark";
ctx.fillStyle = "lightgrey";
ctx.arc(320,180,30,0,Math.PI*2);
ctx.fill();
ctx.stroke();
