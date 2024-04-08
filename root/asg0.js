// DrawRectangle.js

var v1 = new Vector3([2.25, 2.25, 0]);

function drawVector(v, color) {
    var canvas = document.getElementById("example");
    if (!canvas) {
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20); // Draw the vector scaled by 20
    ctx.strokeStyle = color;
    ctx.stroke();
}

function handleDrawEvent() {
    var canvas = document.getElementById("example");
    if (!canvas) {
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);

    var v1x = parseFloat(document.getElementById("v1x").value);
    var v1y = parseFloat(document.getElementById("v1y").value);
    var v1 = new Vector3([v1x, v1y, 0]);

    var v2x = parseFloat(document.getElementById("v2x").value);
    var v2y = parseFloat(document.getElementById("v2y").value);
    var v2 = new Vector3([v2x, v2y, 0]);

    drawVector(v1, "red");
    drawVector(v2, "blue");
}

function angleBetween(v1, v2) {
    var dotProduct = Vector3.dot(v1, v2);
    var magnitudes = v1.magnitude() * v2.magnitude();
    var angle = Math.acos(dotProduct / magnitudes);
    return angle * 180 / Math.PI;
}

function areaTriangle(v1, v2) {
    var crossProduct = Vector3.cross(v1, v2);
    return crossProduct.magnitude() / 2;
}

function handleDrawOperationEvent() {
    var canvas = document.getElementById("example");
    if (!canvas) {
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);

    var v1x = parseFloat(document.getElementById("v1x").value);
    var v1y = parseFloat(document.getElementById("v1y").value);
    var v1 = new Vector3([v1x, v1y, 0]);

    var v2x = parseFloat(document.getElementById("v2x").value);
    var v2y = parseFloat(document.getElementById("v2y").value);
    var v2 = new Vector3([v2x, v2y, 0]);

    drawVector(v1, "red");
    drawVector(v2, "blue");

    var operation = document.getElementById("operation").value;
    var scalar = parseFloat(document.getElementById("scalar").value);

    var v3, v4;
    switch (operation) {
        case "add":
            v3 = v1.add(v2);
            drawVector(v3, "green");
            break;
        case "sub":
            v3 = v1.sub(v2);
            drawVector(v3, "green");
            break;
        case "mul":
            v3 = v1.mul(scalar);
            v4 = v2.mul(scalar);
            drawVector(v3, "green");
            drawVector(v4, "green");
            break;
        case "div":
            v3 = v1.div(scalar);
            v4 = v2.div(scalar);
            drawVector(v3, "green");
            drawVector(v4, "green");
            break;
        case "mag":
            console.log("Magnitude of v1:", v1.magnitude());
            console.log("Magnitude of v2:", v2.magnitude());
            break;
        case "norm":
            drawVector(v1.normalize(), "green");
            drawVector(v2.normalize(), "green");
            break;
        case "angle":
            var angle = angleBetween(v1, v2);
            console.log("Angle between v1 and v2:", angle, "degrees");
            break;
        case "area":
            var area = areaTriangle(v1, v2);
            console.log("Area of triangle formed by v1 and v2:", area);
            break;
    }
}

function main(){
    var canvas = document.getElementById("example");
    if(!canvas){
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);

    drawVector(v1, "red");
}

