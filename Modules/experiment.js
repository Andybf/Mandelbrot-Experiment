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

    minusx;
    plusx;
    minusy;
    plusy;

    consoleReference;
    canvasReference;
    startTime;

    /* Constructors =======================================================*/

    constructor(canvasRef,consoleRef) {
        this.consoleReference = consoleRef;
        this.canvasReference = canvasRef;
        this.numberX = 0.0;
        this.numberY = 0.0;
        this.minusx = 2;
        this.plusx = 2;
        this.minusy = 2;
        this.plusy = 2;
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
                this.canvasReference.drawPoints({x: x, y : y, it : iterations});
                break;
            }
        }
        
    }
    startAnalyse() {
        this.consoleReference.print("Executing...");
        this.startTime = Date.now();
        
        this.startTime = Date.now();
        for (var x=-this.minusx; x<=this.plusx; x = x+this.pointRatio) {
            for (var y=-this.minusy; y<=this.plusy; y = y+this.pointRatio) {
                //this.canvasReference.drawPoints(x,y, 0);
                this.analysePoint(x,y)
            }
        }

        this.consoleReference.print("[INFO] Seconds Elapsed: "+ ( (Date.now() - this.startTime) /1000).toString());
    }

}