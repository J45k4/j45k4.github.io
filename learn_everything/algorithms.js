window.onload = function() {
    var canvas = document.getElementById("bfsCanvas");
    var ctx = canvas.getContext("2d");
  
    // Draw circles for nodes
    ctx.beginPath();
    ctx.arc(100, 50, 10, 0, Math.PI * 2);
    ctx.arc(50, 150, 10, 0, Math.PI * 2);
    ctx.arc(150, 150, 10, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
  
    // Draw lines for edges
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(50, 150);
    ctx.lineTo(150, 150);
    ctx.lineTo(100, 50);
    ctx.strokeStyle = "black";
    ctx.stroke();
  };
  