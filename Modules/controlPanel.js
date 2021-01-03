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
                    <input type="number" class="default-input default-border" id="zoom" value="2.0" step="0.1" min="0" max="512" />
                    
                    <button class="default-button default-border" id="start-button">Start!</button>
                </div>
            </section>
        `
    }
    connectedCallback() {
        
        // this.querySelector("input[id*='number-x']").addEventListener('change', function () {
        //     self.isInputchanged();
        // });
        // this.querySelector("input[id*='number-y']").addEventListener('change', function () {
        //     self.isInputchanged();
        // });
        this.querySelector("input[id*='maxIterations']").addEventListener('change', function () {
            self.isInputchanged();
        });
        this.querySelector("input[id*='zoom']").addEventListener('change', function () {
            self.isInputchanged();
        });
        this.querySelector("button[id*='start-button']").addEventListener('click', function() {
            self.startAnalyse();
        });
    }

    /* Class Methods =======================================================*/
}