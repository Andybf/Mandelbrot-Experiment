/*
 * Mandelbrot Experiment
 * Created By: Anderson Bucchianico
 * Date: 30/dec/2020
 * Type: Experimental Software
*/

import Canvas       from './Modules/canvas.js';
import Console      from './Modules/console.js';
import Experiment   from './Modules/experiment.js';
import ControlPanel from './Modules/controlPanel.js';

customElements.define("comp-canvascontainer", Canvas);
customElements.define("comp-console",         Console);
customElements.define("comp-controlpanel",    ControlPanel);

let canvas = document.querySelector("comp-canvascontainer");
let console = document.querySelector("comp-console");
let experiment = new Experiment(canvas,console);
experiment.startAnalyse();


// document.querySelector("body").addEventListener('keydown', function(e) {
//     switch(e.code) {
//         case 'ArrowUp':
//             inputY.value = (parseFloat(inputY.value) + 0.01).toFixed(2);
//             break;
//         case 'ArrowDown' :
//             inputY.value = (parseFloat(inputY.value) - 0.01).toFixed(2);
//             break;
//         case 'ArrowLeft' :
//             inputX.value = (parseFloat(inputX.value) - 0.01).toFixed(2);
//             break;
//         case 'ArrowRight' :
//             inputX.value = (parseFloat(inputX.value) + 0.01).toFixed(2);
//             break;
//     }
//     exp.isInputchanged();
// });

