import ListService from "../Services/ListService.js";

let _listService = new ListService()


function _draw() {
    let template = ``
    let lists = _listService.List
    lists.forEach((list, index) => {
        template += list.getTemplate(index)
    })
    document.querySelector('#list').innerHTML = template
}


export default class ListController {
    constructor() {
        console.log("Hello from ListController")
        _draw()
    }

    addList(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.name.value
        }
        _listService.addList(newList)
        _draw()
    }
    addTask(event, listIndex) {
        event.preventDefault()
        let form = event.target
        let newTask = form.task.value
        _listService.addTask(newTask, listIndex)
        _draw()
    }
    deleteList(index) {
        _listService.deleteList(index)
        _draw()
    }
    deleteTask(listIndex, taskIndex) {
        _listService.deleteTask(listIndex, taskIndex)
        _draw()
    }
}