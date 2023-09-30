window.onload = () => {
    const linesCanvas = document.getElementById('linesCanvas');
    const linesCtx = linesCanvas.getContext('2d');

    // Draw two parallel lines
    linesCtx.moveTo(10, 10);
    linesCtx.lineTo(190, 10);

    linesCtx.moveTo(10, 50);
    linesCtx.lineTo(190, 50);

    linesCtx.stroke();


    // For 90 Degree Angle
    var angleCanvas = document.getElementById('angleCanvas');
    var angleCtx = angleCanvas.getContext('2d');

    angleCtx.beginPath();
    angleCtx.moveTo(150, 50);
    angleCtx.lineTo(50, 50);
    angleCtx.lineTo(50, 150);
    angleCtx.stroke();

    angleCtx.beginPath();
    angleCtx.arc(150, 50, 20, 0, Math.PI / 2, false);
    angleCtx.lineWidth = 2;
    angleCtx.strokeStyle = '#000000';
    angleCtx.stroke();
}