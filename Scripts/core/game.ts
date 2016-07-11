/// <reference path="_reference.ts"/>

// make a reference to the canvas element
let canvas:HTMLElement = document.getElementById("canvas");

// create a reference to stage container
let stage:createjs.Stage;

let helloLabel:createjs.Text;

let startButton:objects.Button //referance to the button class

function init():void {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop); //create a event listener for the ticker
    main(); //call the main game function 
        
    
}

function  gameLoop():void {
   

    stage.update(); // reference the stage
}
function startButtonClick(event:createjs.MouseEvent) {
    helloLabel.text = "clicked!";
    
}

function main():void {
    helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() *0.5;
    helloLabel.regX = helloLabel.getMeasuredHeight() *0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);

    startButton = new objects.Button("../../Assets/images/start.png", 320,340,true);
    stage.addChild(startButton);

    startButton.on("click", startButtonClick);
}


window.addEventListener("load",init);