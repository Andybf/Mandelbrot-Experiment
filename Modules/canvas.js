/* 
 * Mandelbrot Experiment
 * Created By: Anderson Bucchianico
 * Date: 02/jan/2020
 * Type: Experimental Software
*/

export default class Canvas extends HTMLElement {
    
    /* Custom Atributes =======================================================*/

    self;
    height;
    width;
    zoom;
    element;
    context;
    

    /* Constructors =======================================================*/

    constructor() { // When Comp Is Created;
        super();
        this.self = this
        this.innerHTML = `
        
            <section class="default-border console-control">
                <label class="default-label">Canvas</label>
                <button class="default-button default-border" id="clearCanvas" >Clear Canvas</button>
            </section>

            <section class="default-border canvas-wrapper">
                <canvas class="canvas" id="canvas"></canvas>
            </section>
        `
    }

    connectedCallback() { // After Comp Load
        this.zoom = 2;
        this.element = this.querySelector("canvas");
        this.context = this.element.getContext("2d");
        this.width = parseFloat(getComputedStyle(this.element)['width'])
        this.height = parseFloat(getComputedStyle(this.element)['height']);
        this.resizeDrawScreen();
        this.querySelector("button[id*='clearCanvas']").addEventListener('click', this.clearCanvas);
        console.log("[INFO] Canvas Initialized.");
    }



    /* Class Methods =======================================================*/

    resizeDrawScreen() {
        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;
        this.context.fillStyle = "#fff";
        this.context.fillRect(0,0, this.width, this.height);
        this.drawAxis();
    }
    clearCanvas() {
        var self = this.parentElement.parentElement;
        self.context.clearRect(0,0, this.width, this.height);
        self.resizeDrawScreen();
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
        return [
             pointX * this.width/this.zoom + this.width/this.zoom,
            -pointY * this.width/this.zoom + this.width/this.zoom
        ];
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
        this.context.fillStyle = "black";
        this.context.fillRect(pxCoords[0], pxCoords[1], 1, 1);
    }
    drawPixels(x,y) {
        this.context.fillStyle = "black";
        this.context.fillRect(x, y, 1, 1);
    }
}