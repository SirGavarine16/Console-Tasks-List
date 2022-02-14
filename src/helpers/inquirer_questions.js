const Task = require('../models/task')

require('colors')

/**
 * @returns Inquirer questions with the options of the main menu.
 */
const getMainMenuQuestions = () => {
    return [{
        type: 'list',
        name: 'value',
        message: 'What do you wish to do?',
        choices: [{
            value: 'createTask',
            name: `${'[1]'.green} Create a new task.`,
        }, {
            value: 'showAllTasks',
            name: `${'[2]'.green} Show all tasks.`,
        }, {
            value: 'showPendingTasks',
            name: `${'[3]'.green} Show all pending tasks.`,
        }, {
            value: 'showCompletedTasks',
            name: `${'[4]'.green} Show all completed tasks.`,
        }, {
            value: 'completeTask',
            name: `${'[5]'.green} Complete a task.`,
        }, {
            value: 'deleteTask',
            name: `${'[6]'.green} Delete a task.`,
        }, {
            value: '0',
            name: `${'[0]'.green} Close.`,
        }]
    }]
}

/**
 * @returns Inquirer questions with an input to catch an Enter.
 */
const getPauseQuestions = () => {
    return [{
        type: 'input',
        name: 'value',
        message: `Press ${'ENTER'.green} to continue...`
    }]
}

/**
 * @param {string} message The message to show on console.
 * @param {string} validation The validation message to show on error on console.
 * @returns Inquirer questions with an input to catch a validated value.
 */
const getReadInputQuestions = (message = '', validation = '') => {
    return [{
        type: 'input',
        name: 'value',
        message,
        validate(value) {
            if (value.length === 0) {
                return validation
            }
            return true
        }
    }]
}

/**
 * @param {string} message The message to show on console.
 * @return Inquirer questions with a confirm.
 */
const getConfirmationQuestions = (message) => {
    return [{
        type: 'confirm',
        name: 'value',
        message
    }]
}

/**
 * @param {Task[]} tasklist List with all the tasks.
 * @returns Inquirer questions with all the tasks to delete.
 */
const getTaskToDeleteQuestions = (tasklist) => {
    return [{
        type: 'list',
        name: 'value',
        message: 'Delete',
        choices: [
            ...tasklist.map((task, index) => {
                return {
                    value: task.id,
                    name: `${`[${index + 1}]`.green} ${task.description}`
                }
            }),
            {
                value: '0', name: `${`[0]`.green} Cancel`
            }
        ]
    }]
}

/**
 * @param {Task[]} tasklist List with all the tasks.
 * @returns Inquirer questions with all the tasks to edit.
 */
const getTasksToEditQuestions = (tasklist) => {
    return [{
        type: 'checkbox',
        name: 'values',
        message: 'Select tasks',
        choices: tasklist.map((task, index) => {
            return {
                value: task.id,
                name: `${`[${index + 1}]`.green} ${task.description}`,
                checked: task.completedAt !== null
            }
        })
    }]
}

module.exports = {
    getMainMenuQuestions,
    getPauseQuestions,
    getReadInputQuestions,
    getConfirmationQuestions,
    getTaskToDeleteQuestions,
    getTasksToEditQuestions
}