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
    drawPoints(x,y) {
        function convertPointsToPixels(self, pointX,pointY) {
            return [ pointX * self.width/2 + self.width/2, -pointY * self.width/2 + self.width/2 ];
        }
        let pxCoords = convertPointsToPixels(this, x,y);
        this.context.fillStyle = "red";
        this.context.fillRect(pxCoords[0], pxCoords[1], 1, 1);
    }
}

class Experiment {
    numberX;
    numberY;
    addNumber;
    maxIterations
    consoleReference;
    canvasReference;
    startTime;

    constructor(csl,cvs) {
        this.consoleReference = csl;
        this.canvasReference = cvs;
        //this.isInputchanged();
    }
    isInputchanged() {
        this.numberX = parseFloat(document.querySelector("input[id*='number-x']").value);
        this.numberY = parseFloat(document.querySelector("input[id*='number-y']").value);
        this.addNumber = parseFloat(document.querySelector("input[id*='addNumber']").value);
        this.maxIterations = document.querySelector("input[id*='maxIterations']").value;
        this.execute();
    }
    execute() {
        this.startTime = Date.now();
        this.consoleReference.cleanConsole();
        this.consoleReference.print("Executing...")
        this.canvasReference.clearCanvas();
        for (var index=0; index<this.maxIterations; index++) {
            this.consoleReference.print(this.numberX + " | " + this.numberY);
            this.canvasReference.drawPoints(this.numberX, this.numberY);
            var tempX = this.numberX;
            var tempY = this.numberY;
            this.numberX = Math.pow(tempX,2) - Math.pow(tempY,2);
            this.numberY = 2*tempX*tempY + this.addNumber;
        }
        this.consoleReference.print("[INFO] Milisseconds Elapsed: "+ Date.now() - this.startTime);
    }
}

let csl = new Console;
let cvs = new Canvas(csl);
let exp = new Experiment(csl,cvs);

document.querySelector("input[id*='number-x']").addEventListener('change', function () {
    exp.isInputchanged();
});
document.querySelector("input[id*='number-y']").addEventListener('change', function () {
    exp.isInputchanged();
});
document.querySelector("input[id*='addNumber']").addEventListener('change', function () {
    exp.isInputchanged();
});
document.querySelector("input[id*='maxIterations']").addEventListener('change', function () {
    exp.isInputchanged();
});
// document.querySelector("button[id*='goButton']").addEventListener('click', function () {
//     exp.execute();
// });
document.querySelector("button[id*='clearCanvas']").addEventListener('click', function() {
    cvs.clearCanvas();
});
document.querySelector("button[id*='clearConsole']").addEventListener('click', function() {
    csl.cleanConsole();
});