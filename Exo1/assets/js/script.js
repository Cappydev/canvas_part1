var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
console.log(ctx);

ctx.fillStyle = "lightblue";
ctx.fillRect(50, 100, 200, 200);
//fenetre gauche
ctx.fillStyle = "lightgrey";
ctx.fillRect (75 , 135 , 32 ,32);


// fenetre droite
ctx.fillStyle = "lightgrey";
ctx.fillRect (195 , 135 , 30 ,30);

// Porte
ctx.fillStyle = "lightgrey";
ctx.fillRect (128 , 220 , 41 ,75);



// toit
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(150, 25);
ctx.lineTo(250, 100);
ctx.lineTo(50, 100);
ctx.fill();