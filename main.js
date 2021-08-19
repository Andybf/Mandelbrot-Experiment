/*
 * Mandelbrot Experiment
 * Created By: Anderson Bucchianico
 * Date: 30/dec/2020
 * Type: Experimental Software
*/

import Canvas       from './Modules/canvas.js';
import Console      from './Modules/console.js';
import Experiment   from './Modules/experiment.js';

customElements.define("comp-canvascontainer", Canvas);
customElements.define("comp-console",         Console);

let canvas = document.querySelector("comp-canvascontainer");
let console = document.querySelector("comp-console");
let experiment = new Experiment(canvas,console);

document.querySelector("input[id*='canvasResolution']").addEventListener('change', (event) => {
    canvas.width = event.target.value;
    canvas.height = event.target.value;
    canvas.children[0].style['height'] = window.window.innerHeight-10 + "px";
    canvas.clearCanvas();
});
document.querySelector("input[id*='maxIterations']").addEventListener('change', (event) => {
    experiment.updateValues();
});
document.querySelector("input[id*='zoom']").addEventListener('change', (event) => {
    experiment.updateValues();
});
document.querySelector("input[id='ratio']").addEventListener('change', (event) => {
    experiment.updateValues();
});
document.querySelector("input[id='use1to1ratio']").addEventListener('change', (event) => {
    experiment.updateValues();
    event.target.checked ?
        document.querySelector("input[id='ratio']").style.visibility = "hidden" :
        document.querySelector("input[id='ratio']").style.visibility = "visible"
});
document.querySelector("input[id*='rendX']").addEventListener('change', (event) => {
    experiment.updateValues();
});
document.querySelector("input[id*='rendY']").addEventListener('change', (event) => {
    experiment.updateValues();
});
document.querySelector("button[id='executeButton']").addEventListener('click', (event) => {
    canvas.clearCanvas();
    experiment.startAnalyse();
});
document.querySelector("button[id='showConsole']").addEventListener('click', (event) => {
    console.showHideSelf();
});

document.querySelector("canvas").addEventListener("click", (event) => {
    //window.console.log((event.offsetX/canvas.width),(event.offsetY/canvas.height));
    let pointx = event.offsetX / (canvas.width/2);
    let pointY = event.offsetY / (canvas.width/2);
    canvas.drawCartesianAxis(pointx,pointY);
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

