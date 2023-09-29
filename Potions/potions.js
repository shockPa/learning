// model
const ingredients = [
    "yellow",
    "blue",
    "green",
    "purple",
];

let mixedIngredients = [''];

let mixedPotions = [''];

let colorValue = 0;
const ctx = canvas.getContext("2d");

// view
updateView();

function draw() {
    document.getElementById("myCanvas");
    
    
    }
 function changeColor() {
        colorValue += 10;
        ctx.fillStyle = "rgb(" + colorValue + ", " + colorValue + ", " + colorValue + ")";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    }



// controller


// ctx.fillStyle = "rgb(200, 0, 0)";
    //   ctx.fillRect(10, 10, 50, 50);

    // ctx.fillStyle = "rgba(100, 0, 100, 0.5)"; // middle
    //   ctx.fillRect(35, 35, 50, 50);

    //   ctx.fillStyle = "rgba(150, 150, 0, 0.5)";
    //   ctx.fillRect(10, 60, 50, 50);
    //   ctx.fillStyle = "rgba(0, 150, 0, 0.5)";
    //   ctx.fillRect(60, 10, 50, 50);
    //   ctx.fillStyle = "rgba(0, 150, 150, 0.5)";
    //   ctx.fillRect(60, 60, 50, 50);