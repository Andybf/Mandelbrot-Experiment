/* 
 * Mandelbrot Experiment
 * Created By: Anderson Bucchianico
 * Date: 03/jan/2020
 * Type: Experimental Software
*/

export default class Console extends HTMLElement {

    /* Custom Atributes =======================================================*/

    consoleObj;

    /* Constructors =======================================================*/
    constructor() {
        super();
        this.consoleObj= document.querySelector("article[id*='output-console']");
        this.innerHTML = `
        <section class="console-container">
            <section class="default-border console-control">
                <div>
                    <label class="default-label">Console</label>
                </div>
                <div>
                    <button class="default-button default-border" id="clearConsole">Clear Output</button>
                </div>
            </section>

            <article class="output-console default-border" id="output-console" contenteditable="false">

            </article>
        </section>
        `
    }

    connectedCallback() {
        this.consoleObj = this.querySelector("article[id*='output-console']");
        this.print("Mandelbroot Experiement\nCreated By: Anderson Bucchianico\nDate: 30/dec/2020\n");
        this.querySelector("button[id*='clearConsole']").addEventListener('click', this.clearConsole);
    }

    /* Class Methods =======================================================*/

    print(message) {
        this.consoleObj.innerText+= message + "\n";
    }
    clearConsole() {
        let self = this.ownerDocument.querySelector("comp-console");
        self.consoleObj.innerText = '';
    }
}