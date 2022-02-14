const Task = require("./task")

class Tasks {

    constructor() {
        this.tasklist = {}
    }

    /**
     * @param {string} description 
     */
    createTask = (description) => {
        const newTask = new Task(description)
        this.tasklist[newTask.id] = newTask
    }

}

module.exports = Tasks