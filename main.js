/* 

    Mandelbrot Experiment
    Created by Anderson Bucchianico @ 2020 - 2022.
    Licensed by General Public License v3

    See https://www.gnu.org/licenses/gpl-3.0.en.html for more details.
    Thank you.

*/

import Canvas
    from './Modules/canvas.js';
import Experiment
    from './Modules/experiment.js';

customElements.define("comp-canvascontainer", Canvas);

let canvas = document.querySelector("comp-canvascontainer");
let experiment = new Experiment(canvas,console);
canvas.experimentReference = experiment;

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


