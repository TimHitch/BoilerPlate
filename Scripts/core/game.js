/// <reference path="_reference.ts"/>
// make a reference to the canvas element
var canvas = document.getElementById("canvas");
// create a reference to stage container
var stage;
var helloLabel;
var startButton; //referance to the button class
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop); //create a event listener for the ticker
    main(); //call the main game function 
}
function gameLoop() {
    stage.update(); // reference the stage
}
function startButtonClick(event) {
    helloLabel.text = "clicked!";
}
function main() {
    helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regX = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
    startButton = new objects.Button("../../Assets/images/start.png", 320, 340, true);
    stage.addChild(startButton);
    startButton.on("click", startButtonClick);
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map