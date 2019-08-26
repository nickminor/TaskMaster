import List from "../Models/List.js";

let _state = {
    lists: []
}

export default class ListService {
    deleteTask(listIndex, taskIndex) {
        _state.lists[listIndex].tasks.splice(taskIndex, 1)
        this.saveLists()
    }
    deleteList(index) {
        _state.lists.splice(index, 1)
        this.saveLists()
    }
    addTask(newTask, listIndex) {
        _state.lists[listIndex].tasks.push(newTask)
        this.saveLists()
    }
    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
        console.log(_state.lists)
    }
    constructor() {
        console.log("Hello from List Service")
        this.loadLists()

    }
    get List() {
        return _state.lists.map(list => new List(list))
    }


    loadLists() {
        let savedLists = JSON.parse(localStorage.getItem("lists"))
        if (savedLists) {
            _state.lists = savedLists
        }
    }

    saveLists() {
        console.log(JSON.stringify(_state.lists))
        localStorage.setItem("lists", JSON.stringify(_state.lists))
    }


}