const canvas = document.querySelector('#canvas');
const clearBtn = document.querySelector('#clear');
const sizeBtn = document.querySelector('#size');
const eraserBtn = document.querySelector('#eraser');
const penBtn = document.querySelector('#pen');
const randomBtn = document.querySelector('#random');
const colorBtn = document.querySelector('#color');

const clear = toHSLA(0, 100, 100);
let ink = toHSLA(0, 100, 0);
let color = ink;

function toHSLA(hue, saturation, lightness = 50, alpha = 1.0) {
    return "hsla(" + hue + "," + saturation + "%," + lightness + "%," + alpha + ")";
}

const randRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

clearBtn.onclick = () => {
    for (square of canvas.childNodes) {
        square.style.backgroundColor = clear;
    }
};

eraserBtn.onclick = () => color = clear;

colorBtn.addEventListener("input", () => {
    ink = colorBtn.value;
    color = ink;
});

randomBtn.onclick = () => {
    ink = toHSLA(randRange(0, 361), randRange(0, 101));
    color = ink;
};

penBtn.onclick = () => {
    color = ink;
};

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

