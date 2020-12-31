/*
    Mandelbroot Experiment

    Created By: Anderson Bucchianico
          Date: 30/dec/2020
          Type: Experimental Software
*/

class Console {
    consoleObj;

    constructor() {
        this.consoleObj= document.querySelector("article[id*='output-console']");
        this.print("Mandelbroot Experiement\nCreated By: Anderson Bucchianico\nDate: 30/dec/2020\n");
    }
    print(message) {
        this.consoleObj.innerText += message + "\n";
    }
    cleanConsole() {
        this.consoleObj.innerText = '';
    }
}

class Canvas {
    element;
    context;

    constructor(csl) {
        this.element = document.querySelector("canvas[id*=canvas]");
        this.context = this.element.getContext("2d");
        this.resizeScreen();
        csl.print("Canvas Initialized.")
        
    }
    resizeScreen() {
        this.context.canvas.width = 500;
        this.context.canvas.height = 500;
        this.context.fillStyle = "#eee";
        this.context.fillRect(0,0, 500, 500);
    }
}

class Experiment {
    numberX;
    numberY;
    addNumber;
    constructor() {
        this.isInputchanged();
    }
    isInputchanged() {
        this.numberX = document.querySelector("input[id*='number-x']").value;
        this.numberY = document.querySelector("input[id*='number-y']").value;
        console.log(this.numberX, this.numberY)
    }
    execute() {
        for (var index=0; index<20; index++) {
            this.consoleObj.innerText += Math.pow(this.numberX,2) + " | " + Math.pow(this.numberY,2) + "\n";
            this.numberX = Math.pow(this.numberX,2);
            this.numberY = Math.pow(this.numberY,2);
        }
    }
}

let csl = new Console;

let cvs = new Canvas(csl);


document.querySelector("input[id*='number-x']").addEventListener('click', function () {
    exp.isInputchanged();
});
document.querySelector("input[id*='number-y']").addEventListener('click', function () {
    exp.isInputchanged();
});
document.querySelector("button[id*='goButton']").addEventListener('click', function () {
    exp.execute();
});
document.querySelector("button[id*='clearCanvas']").addEventListener('click', function() {
    exp.cleanConsole();
});
document.querySelector("button[id*='clearConsole']").addEventListener('click', function() {
    exp.cleanConsole();
});