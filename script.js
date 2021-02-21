let SizeBtn = document.querySelector('#size');
let canvas = document.querySelector('#canvas');

let size = 16;
for (let i = 0; i < Math.pow(size, 2); i++) {
    let square = document.createElement('div');
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "darkblue";
    })
    canvas.append(square);
}

canvas.style.gridTemplateColumns = `repeat(${size}, auto)`;
canvas.style.gridTemplateRows = `repeat(${size}, auto)`;