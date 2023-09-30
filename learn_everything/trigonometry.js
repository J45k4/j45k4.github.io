window.onload = () => {
    // For Sine Function
    var sineCanvas = document.getElementById('sineCanvas');
    var sineCtx = sineCanvas.getContext('2d');
    sineCtx.beginPath();
    for (var x = 0; x <= 400; x += 1) {
        var y = 100 - 50 * Math.sin(x * Math.PI / 180);
        if (x === 0) sineCtx.moveTo(x, y);
        else sineCtx.lineTo(x, y);
    }
    sineCtx.stroke();

    // For Cosine Function
    var cosineCanvas = document.getElementById('cosineCanvas');
    var cosineCtx = cosineCanvas.getContext('2d');
    cosineCtx.beginPath();
    for (var x = 0; x <= 400; x += 1) {
        var y = 100 - 50 * Math.cos(x * Math.PI / 180);
        if (x === 0) cosineCtx.moveTo(x, y);
        else cosineCtx.lineTo(x, y);
    }
    cosineCtx.stroke();

    // For Tangent Function
    var tangentCanvas = document.getElementById('tangentCanvas');
    var tangentCtx = tangentCanvas.getContext('2d');
    tangentCtx.beginPath();
    for (var x = 0; x <= 400; x += 1) {
        var tan = Math.tan(x * Math.PI / 180);
        // Skip drawing near asymptotes
        if (tan > 5 || tan < -5) continue;
        var y = 100 - 20 * tan;
        if (x === 0) tangentCtx.moveTo(x, y);
        else tangentCtx.lineTo(x, y);
    }
    tangentCtx.stroke();
}