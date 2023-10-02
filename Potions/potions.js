// model
const ingredients = [
    "yellow",
    "blue",
    "green",
    "purple",
];

let mixedIngredients = [''];

let mixedPotions = [''];


// view
view.init();
var model = {
    color: 'white'
};

// View
var view = {
    canvas: document.getElementById('myCanvas'),
    button: document.getElementById('myButton'),
    init: function() {
        this.button.addEventListener('click', function() {
            controller.changeColor();
        });
        this.render();
    },
    render: function() {
        var context = this.canvas.getContext('2d');
        context.fillStyle = model.color;
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

// Controller
var controller = {
    changeColor: function() {
        model.color = model.color === 'white' ? 'black' : 'white';
        view.render();
    }
};
// controller

// document.body.style.backgroundColor = 'green';
// document.body.style.backgroundColor = ${color}

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