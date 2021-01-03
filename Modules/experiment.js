/* 
 * Mandelbrot Experiment
 * Created By: Anderson Bucchianico
 * Date: 03/jan/2020
 * Type: Experimental Software
*/

export default class Experiment {

    /* Custom Atributes =======================================================*/

    numberX;
    numberY;
    maxIterations;
    consoleReference;
    canvasReference;
    startTime;

    /* Constructors =======================================================*/

    constructor(canvasRef,consoleRef) {
        this.consoleReference = consoleRef;
        this.canvasReference = canvasRef;
        this.numberX = 0.0;
        this.numberY = 0.0;
        this.maxIterations = document.querySelector("input[id*='maxIterations']").value;
    }
    connectedCallback() {

    }


    /* Class Methods =======================================================*/

    isInputchanged() {
        //this.numberX = parseFloat(document.querySelector("input[id*='number-x']").value);
        //this.numberY = parseFloat(document.querySelector("input[id*='number-y']").value);
        this.canvasReference.zoom = document.querySelector("input[id*='zoom']").value;
        this.maxIterations = document.querySelector("input[id*='maxIterations']").value;
        //this.consoleReference.cleanConsole();
        this.canvasReference.clearCanvas();
        //this.canvasReference.drawIndicator("C",this.numberX, this.numberY);
        this.startAnalyse();
    }
    analysePoint(x,y) {
        let X = x;
        let Y = y;
        for (var index=0; index<this.maxIterations; index++) {            
            var tempX = Math.pow(X,2) - Math.pow(Y,2) + x;
            var tempY = 2*X*Y + y;
            X = tempX;
            Y = tempY;
        }
        if (X * Y < 2) {
            this.canvasReference.drawPoints(x, y);
        }
    }
    startAnalyse() {
        this.consoleReference.print("Executing...");
        this.startTime = Date.now();
        for (var x=-1; x<=1; x = x+0.002) {
            for (var y=-1; y<=1; y = y+0.002) {
                //this.canvasReference.drawPoints(x,y);
                this.analysePoint(x,y)
            }
        }
        this.consoleReference.print("[INFO] Seconds Elapsed: "+ ( (Date.now() - this.startTime) /1000).toString());
    }

}