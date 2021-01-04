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
            <section class="control-panel default-border">
                <div>`+
                    // <label>X</label>
                    // <input type="number" disabled class="default-input default-border" id="number-x" value="0.0" step="0.01" min="-1" max="1" />
                    // <label>Y</label>
                    // <input type="number" disabled class="default-input default-border" id="number-y" value="0.0" step="0.01" min="-1" max="1" />
                    `
                    <label>Max Iterations</label>
                    <input type="number" class="default-input default-border" id="maxIterations" value="35" step="1" min="1" max="512" />
                    
                    <label>Zoom</label>
                    <input type="number" class="default-input default-border" id="zoom" value="3.0" step="0.1" min="0" max="512" />

                    <label>Point to Pixel Ratio</label>
                    <input type="number" class="default-input default-border" id="ratio" value="4.0" step="0.1" min="0.5" max="512" />

                    <button id="executeButton" class="default-button  default-border" >Execute</button>
                    
                </div>
            </section>
        `
    }
    connectedCallback() {
    }

    /* Class Methods =======================================================*/
    
}