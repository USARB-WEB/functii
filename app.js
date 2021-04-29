let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

const drawPoint = (x, y, canvas) => {
    //console.log(x, f(x));
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.lineTo(x + 1, y + 1);
    canvas.stroke();
}

const f  = (x) => {
    //return x * x * x
    //return Math.cos(x/ 50) * 500;
    //return Math.pow(x, 2);
    return 2 * x;
}

const X = [];
for (let index = -500; index < 500; index++) {
    X.push(index);
}

var i = 0;
setInterval(() => {
    x = X[i++];
    drawPoint(x + 200, f(x) / 100 + 50, ctx);
}, 10);
