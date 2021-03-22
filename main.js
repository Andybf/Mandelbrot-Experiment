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
//experiment.startAnalyse();

document.querySelector("input[id*='canvasResolution']").addEventListener('change', function(event) {
    canvas.width = event.target.value;
    canvas.height = event.target.value;
    canvas.children[0].style['height'] = window.window.innerHeight-10 + "px"
    canvas.clearCanvas();
});

document.querySelector("input[id*='maxIterations']").addEventListener('change', function(event) {
    experiment.maxIterations = event.target.value;
});

document.querySelector("input[id*='zoom']").addEventListener('change', function(event) {
    canvas.zoom = event.target.value;
});

document.querySelector("input[id='ratio']").addEventListener('change', function(event) {
    experiment.pointRatio = event.target.value/canvas.width;
});

document.querySelector("input[id='minusx']").addEventListener('change', function(event) {
    experiment.minusx = event.target.value;
});
document.querySelector("input[id='plusx']").addEventListener('change', function(event) {
    experiment.plusx = event.target.value;
});
document.querySelector("input[id='minusy']").addEventListener('change', function(event) {
    experiment.minusy = event.target.value;
});
document.querySelector("input[id='plusy']").addEventListener('change', function(event) {
    experiment.plusy = event.target.value;
});

document.querySelector("button[id='executeButton']").addEventListener('click', function(event) {
    canvas.clearCanvas();
    experiment.startAnalyse();
});

document.querySelector("button[id='showConsole']").addEventListener('click', function(event) {
    console.showHideSelf();
});


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

