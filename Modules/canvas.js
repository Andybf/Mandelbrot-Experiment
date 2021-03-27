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
    locationX;
    locationY;
    element;
    context;

    /* Constructors =======================================================*/

    constructor() { // When Comp Is Created;
        super();
        this.self = this
        this.innerHTML = `
            <canvas class="canvas" style="border:dotted 2px #d9d6f7;" id="canvas"></canvas>
        `
    }

    connectedCallback() { // After Comp Load
        this.element = this.querySelector("canvas");
        this.context = this.element.getContext("2d");
        this.width =936 //document.querySelector("canvas").style.height;
        this.height = 936//document.querySelector("canvas").style.height;
        this.element.style['height'] = window.window.innerHeight-10 + "px"
        this.resizeDrawScreen();
        console.log("[INFO] Canvas Initialized.");
    }

    /* Class Methods =======================================================*/

    resizeDrawScreen() {
        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;
        this.context.fillStyle = "#fff";
        this.context.fillRect(0,0, this.width, this.height);
    }
    clearCanvas() {
        this.context.clearRect(0,0, this.width, this.height);
        this.resizeDrawScreen();
    }

    convertPointsToPixels(pointX,pointY) {
        return [
            pointX * this.zoom+ this.locationX,
            -pointY * this.zoom+ this.locationY
        ];
    }
    drawPoints(data) {
        let pxCoords = this.convertPointsToPixels(data.x,data.y);
        this.context.fillStyle = 'hsl('+(240-data.it)+' 100% 50%)';
        this.context.fillRect(pxCoords[0], pxCoords[1], 1, 1);
    }
    drawPixels(x,y) {
        this.context.fillStyle = "black";
        this.context.fillRect(x, y, 1, 1);
    }
}