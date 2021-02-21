let canvas = document.querySelector('#canvas');
let clearBtn = document.querySelector('#clear');
let sizeBtn = document.querySelector('#size');
let eraserBtn = document.querySelector('#eraser');
let colorBtn = document.querySelector('#color');

const clear = toHSLA(0, 100, 100);
let color = toHSLA(0, 100, 0);

function toHSLA(hue, saturation, lightness = 100, alpha = 1.0) {
    return "hsla(" + hue + "," + saturation + "%," + lightness + "%," + alpha + ")"
}

clearBtn.onclick = () => {
    for (square of canvas.childNodes) {
        square.style.backgroundColor = clear;
    }
};

eraserBtn.onclick = () => color = clear;

colorBtn.addEventListener("input", () => {
    color = colorBtn.value;
});

sizeBtn.onclick = () => {
    let size = prompt("Enter size:");
    if (!isNaN(size)) {
        createGrid(size);
        console.log(typeof parseInt(size));
        console.log(parseInt(size));
    }
    else {
        console.log("f");
        alert("Not a number");
    }
};

function createGrid(size) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }

    for (let i = 0; i < Math.pow(size, 2); i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = color;
        });
        canvas.append(square);
    }

    canvas.style.gridTemplateColumns = `repeat(${size}, auto)`;
    canvas.style.gridTemplateRows = `repeat(${size}, auto)`;
}

createGrid(16);

