var button = document.getElementById("button");
var circle = document.getElementById("circle");
var timeDisplay = document.getElementById("timeDisplay");
var input = document.getElementById("input");
var changingClass2 = document.getElementById("changingClass2");
var avgTimeDisplay = document.getElementById("avgTimeDisplay");
var gayabKaro = document.getElementById("gayabKaro");
var playAgain = document.getElementById("playAgain");
var playAgain1 = document.getElementById("playAgain1");
var secmin = document.getElementById("secmin");

var No = 5;
var played = 0;
var avg = 0;
var gameOver = false;
var inputData = 10;


// button.style.top = '80%';
// button.style.left = '90%';

var randomTop = 0;
var randomLeft = 0;
var display = "block";
var t0 = 0;
var t1 = 0;

createCircle();

// input.addEventListener("change", function () {
//     console.log("Changed");
//     inputData = this.value;
//     console.log(inputData);
//     document.location.reload(true)
// });

button.addEventListener("click", buttonClicked, false);
playAgain.addEventListener("click", reset, false);
playAgain1.addEventListener("click", reset, false);

function buttonClicked() {
    t1 = performance.now();
    var timeTaken = ((t1 - t0) / 1000);
    timeDisplay.innerHTML = timeTaken.toFixed(2);
    t1 = 0;
    t0 = 0;

    avg = Number(avg) + Number(timeTaken.toFixed(2));
    played++;
    console.log(played);

    button.style.display = "none";
    circle.style.display = "none";
    display = "none";
    if (played < inputData) {
        if (display === "none") {
            createCircle();
            button.style.display = "block";
            circle.style.display = "block";
            display = "block";
        }
    }


    if (played == inputData) {
        gayabKaro.classList.add("displayNone");
        var output = (avg / 5).toFixed(2);
        if (output > 59) {
            var minOut = output / 60;
            avgTimeDisplay.innerHTML = minOut;
            secmin.innerHTML = "minute";
        } if (output <= 59) {
            avgTimeDisplay.innerHTML = output;
        }

        button.classList.add("displayNone");
        changingClass2.classList.remove("displayNone");
    }
    // console.timeEnd("test");
}

function createCircle() {
    randomTop = Number(Math.floor(Math.random() * 81));
    randomLeft = Number(Math.floor(Math.random() * 91));

    button.style.top = randomTop + '%';
    button.style.left = randomLeft + '%';
    circle.style.backgroundColor = randomColor();
    // console.time("test");
    t0 = performance.now();
}

function randomColor() {
    var r = Number(Math.floor(Math.random() * 256));
    var g = Number(Math.floor(Math.random() * 256));
    var b = Number(Math.floor(Math.random() * 256));
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    document.location.reload(true)
};