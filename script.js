/*
    Mandelbrot Experiment

    Created By: Anderson Bucchianico
          Date: 30/dec/2020
          Type: Experimental Software
*/

class Console {
    consoleObj;

    constructor() {
        this.consoleObj= document.querySelector("article[id*='output-console']");
        this.print("Mandelbroot Experiement\nCreated By: Anderson Bucchianico\nDate: 30/dec/2020\n");
    }
    print(message) {
        this.consoleObj.innerText += message + "\n";
    }
    cleanConsole() {
        this.consoleObj.innerText = '';
    }
}

class Canvas {
    width = 500;
    height = 500;
    element;
    context;

    constructor(csl) {
        this.element = document.querySelector("canvas[id*=canvas]");
        this.context = this.element.getContext("2d");
        this.resizeDrawScreen();
        csl.print("Canvas Initialized.")
        
    }
    resizeDrawScreen() {
        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;
        this.context.fillStyle = "#fff";
        this.context.fillRect(0,0, this.width, this.height);
        this.drawAxis();
    }
    clearCanvas() {
        this.context.clearRect(0,0, this.width, this.height);
        this.resizeDrawScreen();
    }
    drawAxis() {
        this.context.beginPath();
        this.context.moveTo(this.width/2,0);
        this.context.lineTo(this.width/2,this.height);
        this.context.moveTo(0,this.height/2);
        this.context.lineTo(this.width,this.height/2);
        this.context.strokeStyle = "#ddd";
        this.context.stroke();
    }
    convertPointsToPixels(pointX,pointY) {
        return [ pointX * this.width/2 + this.width/2, -pointY * this.width/2 + this.width/2 ];
    }
    drawIndicator(label,x,y) {
        var pxCoords = this.convertPointsToPixels(x ,y)
        pxCoords[0] -= 3;
        pxCoords[1] -= 10
        this.context.beginPath();
        this.context.arc(pxCoords[0]+3, pxCoords[1]-3, 10, 0, 2*Math.PI);
        this.context.fillStyle = "#ccc";
        this.context.fill();
        this.context.stroke();
        this.context.font = "10px Arial";
        this.context.fillStyle = "black"
        this.context.fillText(label,pxCoords[0],pxCoords[1])
    }
    drawPoints(x,y) {
        let pxCoords = this.convertPointsToPixels(x,y);
        this.context.fillStyle = "red";
        this.context.fillRect(pxCoords[0], pxCoords[1], 1, 1);
    }
    pixelize(x,y){
        let pxCoords = this.convertPointsToPixels(x,y);
        this.context.fillRect(pxCoords[0], pxCoords[1], 1, 1);
    }
}

class Experiment {
    numberX;
    numberY;
    maxIterations;
    consoleReference;
    canvasReference;
    startTime;

    constructor(csl,cvs) {
        this.consoleReference = csl;
        this.canvasReference = cvs;
        this.numberX = 0.0;
        this.numberY = 0.0;
        this.maxIterations = 4;
    }
    isInputchanged() {
        this.numberX = parseFloat(document.querySelector("input[id*='number-x']").value);
        this.numberY = parseFloat(document.querySelector("input[id*='number-y']").value);
        this.maxIterations = document.querySelector("input[id*='maxIterations']").value;
        this.analysePoint();
    }
    analysePoint() {
        this.consoleReference.cleanConsole();
        this.consoleReference.print("Executing...")
        this.startTime = Date.now();
        this.canvasReference.clearCanvas();
        this.canvasReference.drawIndicator("C",this.numberX, this.numberY);

        const cX = this.numberX;
        const xY = this.numberY;
        for (var index=0; index<this.maxIterations; index++) {
            this.consoleReference.print(this.numberX.toFixed(5) + " | " + this.numberY.toFixed(5));
            this.canvasReference.drawPoints(this.numberX, this.numberY);

            var tempX = this.numberX;
            var tempY = this.numberY;
            this.numberX = Math.pow(tempX,2) - Math.pow(tempY,2) + cX;
            this.numberY = 2*tempX*tempY + xY;
        }
        this.consoleReference.print("[INFO] Milisseconds Elapsed: "+ (Date.now() - this.startTime).toString());
    }

}

let csl = new Console;
let cvs = new Canvas(csl);
let exp = new Experiment(csl,cvs);

let inputX = document.querySelector("input[id*='number-x']");
let inputY = document.querySelector("input[id*='number-y']");
inputX.addEventListener('change', function () {
    exp.isInputchanged();
});
inputY.addEventListener('change', function () {
    exp.isInputchanged();
});
document.querySelector("input[id*='maxIterations']").addEventListener('change', function () {
    exp.isInputchanged();
});

document.querySelector("button[id*='clearCanvas']").addEventListener('click', function() {
    cvs.clearCanvas();
});
document.querySelector("button[id*='clearConsole']").addEventListener('click', function() {
    csl.cleanConsole();
});

document.querySelector("body").addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'ArrowUp':
            inputY.value = (parseFloat(inputY.value) + 0.01).toFixed(2);
            break;
        case 'ArrowDown' :
            inputY.value = (parseFloat(inputY.value) - 0.01).toFixed(2);
            break;
        case 'ArrowLeft' :
            inputX.value = (parseFloat(inputX.value) - 0.01).toFixed(2);
            break;
        case 'ArrowRight' :
            inputX.value = (parseFloat(inputX.value) + 0.01).toFixed(2);
            break;
    }
    exp.isInputchanged();
});