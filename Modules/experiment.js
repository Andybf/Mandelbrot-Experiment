/* 

    Mandelbrot Experiment
    Created by Anderson Bucchianico @ 2020 - 2022.
    Licensed by General Public License v3

    See https://www.gnu.org/licenses/gpl-3.0.en.html for more details.
    Thank you.

*/

export default class Experiment {

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
        this.updateValues();
    }

    updateValues() {
        let visibleCoords =
            (this.canvasReference.width/2) /
            (this.canvasReference.width/Number(document.querySelector('#zoom').value))
        ;
        this.centerRenderX = Number(document.querySelector('#rendX').value);
        this.centerRenderY = Number(document.querySelector('#rendY').value);
        this.minusx = visibleCoords - this.centerRenderX;
        this.plusx  = visibleCoords + this.centerRenderX;
        this.minusy = visibleCoords - this.centerRenderY;
        this.plusy  = visibleCoords + this.centerRenderY;
        this.maxIterations =
            Number(document.querySelector("input[id='maxIterations']").value)
        ;
        this.pointRatio = document.querySelector('#use1to1ratio').checked ?
            Number(document.querySelector("input[id='zoom'").value/this.canvasReference.width) :
            Number(document.querySelector("input[id='ratio'").value/this.canvasReference.width)
        ;
        this.canvasReference.zoom =  Number(document.querySelector("input[id*='zoom']").value);
        this.canvasReference.zoomFactor =
            this.canvasReference.width / Number(document.querySelector("input[id*='zoom']").value)
        ;
        this.canvasReference.centerViewPointX =
            -(this.centerRenderX)*this.canvasReference.zoomFactor + (this.canvasReference.width/2) 
        ;
        this.canvasReference.centerViewPointY =
            -(this.centerRenderY)*this.canvasReference.zoomFactor + (this.canvasReference.width/2) 
        ;
    }

    /* Class Methods =======================================================*/

    startAnalyse() {
        this.startTime = Date.now();
        for (var x=-this.minusx; x<=this.plusx; x = x+this.pointRatio) {
            for (var y=-this.minusy; y<=this.plusy; y = y+this.pointRatio) {
                this.analysePoint(x,y);
            }
        }
        console.log("[INFO] Seconds Elapsed: "+ ( (Date.now() - this.startTime) /1000).toString());
    }

    analysePoint(x,y) {
        let realX = x;
        let realY = y;
        for (var iterations=0; iterations<this.maxIterations; iterations++) {            
            var tempX = Math.pow(realX,2) - Math.pow(realY,2) + x;
            var tempY = 2*realX*realY + y;
            realX = tempX;
            realY = tempY;
            if (realX * realY > 2) {
                this.canvasReference.drawPointInCoords(x, y, iterations);
                break;
            }
        }
    }
}