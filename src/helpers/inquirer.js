const inquirer = require('inquirer')
const Task = require('../models/task')
require('colors')

const mainMenuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you wish to do?',
        choices: [
            {
                value: '1',
                name: `${'[1]'.green} Show all tasks.`,
            }, {
                value: '2',
                name: `${'[2]'.green} Show all pending tasks.`,
            }, {
                value: '3',
                name: `${'[3]'.green} Show all completed tasks.`,
            }, {
                value: '4',
                name: `${'[4]'.green} Create a new task.`,
            }, {
                value: '5',
                name: `${'[5]'.green} Complete a task.`,
            }, {
                value: '6',
                name: `${'[6]'.green} Delete a task.`,
            }, {
                value: '0',
                name: `${'[0]'.green} Close.`,
            },
        ]
    }
]

const getOptionFromInquirerMenu = async () => {
    console.clear()
    const { option } = await inquirer.prompt(mainMenuQuestions)
    return option
}

const pauseConsole = async () => {
    const questions = [
        {
            type: 'input',
            name: 'option',
            message: `Press ${'ENTER'.green} to continue...`
        }
    ]
    const { option } = await inquirer.prompt(questions)
    return option
}

/**
 * @param {string} message 
 * @param {string} validation 
 */
const readInput = async (message, validation) => {
    const questions = [{
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
    const { value } = await inquirer.prompt(questions)
    return value
}

const getConfirmation = async (message) => {
    const questions = [{
        type: 'confirm',
        name: 'confirmation',
        message
    }]
    const { confirmation } = await inquirer.prompt(questions)
    return confirmation
}

/**
 * @param {Task[]} tasklist
 */
const getTaskIDToDelete = async (tasklist) => {
    const questions = [{
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
            { value: '0', name: `${`[0] Cancel`}` 
        }]
    }]
    const { value } = await inquirer.prompt(questions)
    return value
}


module.exports = {
    getOptionFromInquirerMenu,
    pauseConsole,
    readInput,
    getTaskIDToDelete,
    getConfirmation
}