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
    pointRatio;

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
        this.pointRatio = document.querySelector("input[id='ratio'").value/this.canvasReference.width;
        console.log(this.pointRatio)
        this.canvasReference.zoom = document.querySelector("input[id*='zoom']").value;
    }


    /* Class Methods =======================================================*/

    analysePoint(x,y) {
        let realX = x;
        let realY = y;
        var iterations = 0;
        for (iterations; iterations<this.maxIterations; iterations++) {            
            var tempX = Math.pow(realX,2) - Math.pow(realY,2) + x;
            var tempY = 2*realX*realY + y;
            realX = tempX;
            realY = tempY;
            if (realX * realY > 2) {
                //console.log(iterations)
                this.canvasReference.drawPoints(x, y, iterations);
                break;
            }
        }
        
    }
    startAnalyse() {
        this.consoleReference.print("Executing...");
        this.startTime = Date.now();
        for (var x=-2; x<=2; x = x+this.pointRatio) {
            for (var y=-2; y<=2; y = y+this.pointRatio) {
                //this.canvasReference.drawPoints(x,y, 0);
                this.analysePoint(x,y)
            }
        }
        this.consoleReference.print("[INFO] Seconds Elapsed: "+ ( (Date.now() - this.startTime) /1000).toString());
    }

}