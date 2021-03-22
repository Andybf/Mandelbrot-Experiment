/* 
 * Mandelbrot Experiment
 * Created By: Anderson Bucchianico
 * Date: 03/jan/2020
 * Type: Experimental Software
*/

export default class ControlPanel extends HTMLElement {

    /* Custom Atributes =======================================================*/
    self = [];

    /* Constructors =======================================================*/
    constructor() {
        super();
        this.self = this;
        this.innerHTML = `
            <div>
                <label>Canvas Resolution</label>
                <input type="number" class="default-input default-border" id="canvasResolution" value="512" step="1" min="32" max="8192" />
            </div>
            <div>
                <label>Max Iterations</label>
                <input type="number" class="default-input default-border" id="maxIterations" value="35" step="1" min="1" max="512" />
            </div>
            <div>
                <label>Zoom</label>
                <input type="number" class="default-input default-border" id="zoom" value="3.0" step="0.1" min="0" max="512" />
            </div>
            <div>
                <label>Point to Pixel Ratio</label>
                <input type="number" class="default-input default-border" id="ratio" value="4.0" step="0.05" min="0.05" max="512" />
            </div>
            <div>
                <label>- X Axis length</label>
                <input type="number" class="default-input default-border" id="minusx" value="2.0" step="0.1" min="0.0" max="512" />
            </div>
            <div>
                <label>+ X Axis length</label>
                <input type="number" class="default-input default-border" id="plusx" value="2.0" step="0.1" min="0.0" max="512" />
            </div>
            <div>
                <label>- Y Axis length</label>
                <input type="number" class="default-input default-border" id="minusy" value="2.0" step="0.1" min="0.0" max="512" />
            </div>
            <div>
                <label>+ Y Axis length</label>
                <input type="number" class="default-input default-border" id="plusy" value="2.0" step="0.1" min="0.0" max="512" />
            </div>
            <div>
                <button id="executeButton" class="default-button  default-border" >Execute</button>
            </div>
            <div>
                <button id="showConsole" class="default-button  default-border" >Show/Hide Console</button>
            </div>
        `
    }
    connectedCallback() {
    }

    /* Class Methods =======================================================*/
    
}