export default class List {
    constructor(data) {

        console.log("Hello from ListModel")
        this.name = data.name
        this.tasks = data.tasks || []

    }

    getTemplate(index) {
        let template =
            `
          <div class="col-4">
              <h3>${this.name}</h3>
              <ul>`
        template += this.drawTasks(index)
        template += `    </ul>
              <form onsubmit="app.controllers.listController.addTask(event, ${index})"> 
                <div class="input-group">
                  <input type="text" class="form-control" name="task" placeholder="Enter Task" required>
                  </div>
                  <button type="submit">Add</button>
                </form>
                <button type ="button" onclick="app.controllers.listController.deleteList(${index})">Delete List</button>
          </div>
      `
        return template
    }
    drawTasks(listIndex) {
        let taskTemplate = ""
        this.tasks.forEach((t, taskIndex) => {
            taskTemplate += `<li>${t}<span onclick="app.controllers.listController.deleteTask(${listIndex}, ${taskIndex})">  X</span></li>`
        });
        return taskTemplate
    }
}