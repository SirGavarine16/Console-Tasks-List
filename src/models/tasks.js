const moment = require('moment')

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

    /**
     * @param {string} taskID 
     */
    deleteTask = (taskID) => {
        delete this.tasklist[taskID]
    }

    toggleTasks = (tasksCompleted = []) => {
        const tasklist = this.getTasklistArray()
        tasklist.forEach((task) => {
            const taskRef = this.tasklist[task.id]
            if (tasksCompleted.includes(task.id)) {
                if (taskRef.completedAt === null) {
                    taskRef.completedAt = moment().format('LLL')
                }
            } else {
                taskRef.completedAt = null
            }
        })
    }

    /**
     * @returns {Task[]}
     */
    getTasklistArray = () => {
        return Object.keys(this.tasklist).map((key) => this.tasklist[key])
    }

    showAllTasks = () => {
        const tasklist = this.getTasklistArray()
        console.log('\n')
        tasklist.forEach((task, index) => {
            const { description, completedAt } = task
            const taskState = completedAt ? `Completed`.green : `Pending`.red
            console.log(`${`[${index + 1}]`.green} ${description} :: ${taskState}`)
        })
        console.log('\n')
    }

    showTasksFiltered = (completed = true) => {
        const tasklist = completed ?
            this.getTasklistArray().filter((t) => t.completedAt !== null) :
            this.getTasklistArray().filter((t) => t.completedAt === null)
        console.log('\n')
        tasklist.forEach((task, index) => {
            const { description, completedAt } = task
            const taskState = completedAt ? `${completedAt}`.white : `Pending`.red
            console.log(`${`[${index + 1}]`.green} ${description} :: ${taskState}`)
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