const inquirer = require('inquirer')
const { 
    getMainMenuQuestions, 
    getPauseQuestions, 
    getReadInputQuestions, 
    getConfirmationQuestions, 
    getTaskToDeleteQuestions, 
    getTasksToEditQuestions 
} = require('./inquirer_questions')


const getOptionFromInquirerMenu = async () => {
    console.clear()
    const { value } = await inquirer.prompt(getMainMenuQuestions())
    return value
}

const pauseConsole = async () => {
    const { value } = await inquirer.prompt(getPauseQuestions())
    return value
}

const readInput = async (message, validation) => {
    const { value } = await inquirer.prompt(getReadInputQuestions(message, validation))
    return value
}

const getConfirmation = async (message) => {
    const { value } = await inquirer.prompt(getConfirmationQuestions(message))
    return value
}

const getTaskIDToDelete = async (tasklist) => {
    const { value } = await inquirer.prompt(getTaskToDeleteQuestions(tasklist))
    return value
}

const getTaskIDsToEdit = async (tasklist) => {
    const { values } = await inquirer.prompt(getTasksToEditQuestions(tasklist))
    return values
}

module.exports = {
    getOptionFromInquirerMenu,
    pauseConsole,
    readInput,
    getTaskIDToDelete,
    getConfirmation,
    getTaskIDsToEdit
}