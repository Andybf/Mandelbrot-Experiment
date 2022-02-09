/* 

    Mandelbrot Experiment
    Created by Anderson Bucchianico @ 2020 - 2022.
    Licensed by General Public License v3

    See https://www.gnu.org/licenses/gpl-3.0.en.html for more details.
    Thank you.

*/

export default class Canvas extends HTMLElement {

    height;
    width;
    zoomFactor;
    zoom;
    centerViewPointX;
    centerViewPointY;
    canvasContext;
    experimentReference;

    constructor() {
        super();
        this.innerHTML = `<canvas class="canvas" style="border:dotted 2px #252525;" id="canvas"></canvas>`
    }

    connectedCallback() {
        let canvasDomElement = this.querySelector("canvas");
        canvasDomElement.style.height = window.window.innerHeight-10 + "px";
        canvasDomElement.style.width = canvasDomElement.style['height'];
        this.canvasContext = canvasDomElement.getContext("2d");
        this.width = Number(canvasDomElement.style.height.replace("px",''));
        this.height = Number(canvasDomElement.style.width.replace("px",''));
        this.resizeDrawScreen();
        canvasDomElement.addEventListener("wheel", this.onWheelScrollOnCanvas);
        canvasDomElement.addEventListener("click", this.onClickOnCanvas);
        console.log("[INFO] Canvas Initialized.");
    }

    /* Events =============================================================== */

    onWheelScrollOnCanvas(event) {
        let actionCoords = this.parentNode.getEventCoordAction(event);
        document.querySelector("input[id*='rendX']").value = actionCoords['x'];
        document.querySelector("input[id*='rendY']").value = actionCoords['y'];
    
        let zoomValue = Number(document.querySelector("input[id*='zoom']").value);
        zoomValue = event.deltaY < 0 ? zoomValue-(zoomValue/10) : zoomValue+(zoomValue/10);
        document.querySelector("input[id*='zoom']").value = zoomValue;
        this.parentNode.clearCanvas();
        this.parentNode.experimentReference.updateValues();
        this.parentNode.experimentReference.startAnalyse();
    }

    onClickOnCanvas(event) {
        let actionCoords = this.parentNode.getEventCoordAction(event);
        this.parentNode.drawCoordIndicator(actionCoords['x'], actionCoords['y']);
    }

    getEventCoordAction(event) {
        return {
            x : (event.offsetX - this.centerViewPointX) / (this.width/this.zoom),
            y : (event.offsetY - this.centerViewPointY) / (this.height/this.zoom)
        };
    }

    /* Class Methods ======================================================== */

    clearCanvas() {
        this.canvasContext.clearRect(0,0, this.width, this.height);
        this.resizeDrawScreen();
    }

    resizeDrawScreen() {
        this.canvasContext.canvas.width = this.width;
        this.canvasContext.canvas.height = this.height;
        this.canvasContext.fillStyle = "#000";
        this.canvasContext.fillRect(0,0, this.width, this.height);
    }

    drawCoordIndicator(locX,locY) {
        let pxCoords = this.convertPointsToPixels(locX,locY);
        this.canvasContext.fillStyle = '#FFFFFF';
        this.canvasContext.fillRect(pxCoords[0], 0, 1, this.height);
        this.canvasContext.fillRect(0, pxCoords[1], this.width, 1);
        this.canvasContext.font = "10px Arial"
        this.canvasContext.fillText(`X: ${locX} | Y: ${locY}`, pxCoords[0], pxCoords[1]);
    }

    convertPointsToPixels(pointX,pointY) {
        return [
            pointX * this.zoomFactor+ this.centerViewPointX,
            pointY * this.zoomFactor+ this.centerViewPointY
        ];
    }

    drawPointInCoords(x, y, it) {
        let pxCoords = this.convertPointsToPixels(x,y);
        this.canvasContext.fillStyle = 'hsl('+(240+it)+' 100% 50%)';
        this.canvasContext.fillRect(pxCoords[0], pxCoords[1], 1, 1);
    }
}