const Task = require("./task")

class Tasks {

    constructor(tasklistArray = null) {
        this.tasklist = tasklistArray ? this.parseTasklistArray(tasklistArray) : {}
    }

    /**
     * @param {string} description 
     */
    createTask = (description) => {
        const newTask = new Task(description)
        this.tasklist[newTask.id] = newTask
    }

    getTasklistArray = () => {
        return Object.keys(this.tasklist).map((key) => this.tasklist[key])
    }

    showAllTasks = () => {
        const tasklist = this.getTasklistArray()
        console.log('\n')
        tasklist.forEach((task, index) => {
            const { description, completedAt } = task
            const taskState = completedAt ? `Completed`.green : `Pending`.red
            console.log(`${`[${index+1}]`.green} ${description} :: ${taskState}`)
        })
        console.log('\n')
    }

    /**
     * @param {Task[]} array 
     */
    parseTasklistArray = (array) => {
        let tasklist = {}
        array.forEach((task) => {
            tasklist[task.id] = new Task(task.description, task.id, task.completedAt)
        })
        return tasklist
    }

}

module.exports = Tasks