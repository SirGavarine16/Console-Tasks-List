const inquirer = require('inquirer')

const Task = require('../models/task')
const { 
    getMainMenuQuestions, 
    getPauseQuestions, 
    getReadInputQuestions, 
    getConfirmationQuestions, 
    getTaskToDeleteQuestions, 
    getTasksToEditQuestions 
} = require('./inquirer_questions')

/**
 * @returns {string} Option selected from the main menu.
 */
const getOptionFromMainMenu = async () => {
    console.clear()
    const { value } = await inquirer.prompt(getMainMenuQuestions())
    return value
}

/**
 * @returns {string} Value from the Inquirer input.
 */
const pauseConsole = async () => {
    const { value } = await inquirer.prompt(getPauseQuestions())
    return value
}

/**
 * @param {string} message Message to show on console.
 * @param {string} validation Validation message to show on console.
 * @returns {string} Value from the Inquirer input.
 */
const readInput = async (message, validation) => {
    const { value } = await inquirer.prompt(getReadInputQuestions(message, validation))
    return value
}

/**
 * @param {string} message Message to show on console.
 * @returns {boolean} Confirmation value from the Inquirer confirm.
 */
const getConfirmation = async (message) => {
    const { value } = await inquirer.prompt(getConfirmationQuestions(message))
    return value
}

/**
 * @param {Task[]} tasklist Complete list of tasks.
 * @returns {string} ID of the task.
 */
const getTaskIDToDelete = async (tasklist) => {
    const { value } = await inquirer.prompt(getTaskToDeleteQuestions(tasklist))
    return value
}

/**
 * @param {Task[]} tasklist Complete list of tasks.
 * @returns {string[]} Array  containing all the task IDs selected.
 */
const getTaskIDsToEdit = async (tasklist) => {
    const { values } = await inquirer.prompt(getTasksToEditQuestions(tasklist))
    return values
}

module.exports = {
    getOptionFromMainMenu,
    pauseConsole,
    readInput,
    getTaskIDToDelete,
    getConfirmation,
    getTaskIDsToEdit
}