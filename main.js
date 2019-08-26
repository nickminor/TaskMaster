import ValuesController from "./app/Controllers/ValuesController.js";
import ListController from "./app/Controllers/ListController.js";


class App {
    constructor() {
        this.controllers = {
            valuesController: new ValuesController(),
            listController: new ListController()
        }
    }
}

window['app'] = new App