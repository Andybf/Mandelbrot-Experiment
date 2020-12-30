
class Experiment {

    consoleObj;
    numberX;
    numberY;
    addNumber;

    constructor() {
        this.consoleObj= document.querySelector("article[id*='output-console']");
        this.isInputchanged();
    }

    execute() {
        for (var index=0; index<20; index++) {
            this.consoleObj.innerText += Math.pow(this.numberX,2) + " | " + Math.pow(this.numberY,2) + "\n";
            this.numberX = Math.pow(this.numberX,2);
            this.numberY = Math.pow(this.numberY,2);
        }
    }

    isInputchanged() {
        this.numberX = document.querySelector("input[id*='number-x']").value;
        this.numberY = document.querySelector("input[id*='number-y']").value;
        console.log(this.numberX, this.numberY)
    }

    cleanConsole() {
        this.consoleObj.innerText = '';
    }
}

let exp = new Experiment;

document.querySelector("input[id*='number-x']").addEventListener('click', function () {
    exp.isInputchanged();
});
document.querySelector("input[id*='number-y']").addEventListener('click', function () {
    exp.isInputchanged();
});
document.querySelector("button[id*='goButton']").addEventListener('click', function () {
    exp.execute();
});
document.querySelector("button[id*='cleanButton']").addEventListener('click', function() {
    exp.cleanConsole();
});