let SizeBtn = document.querySelector('#size');
let canvas = document.querySelector('#canvas');

SizeBtn.onclick = () => {
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
            square.style.backgroundColor = "darkblue";
        })
        canvas.append(square);
    }

    canvas.style.gridTemplateColumns = `repeat(${size}, auto)`;
    canvas.style.gridTemplateRows = `repeat(${size}, auto)`;
}

createGrid(16);

