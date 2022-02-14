const inquirer = require('inquirer')
require('colors')

const getOptionFromInquirerMenu = async () => {
    const questions = [
        {
            type: 'list',
            name: 'option',
            message: 'What do you wish to do?',
            choices: [
                {
                    value: '1',
                    name: `${'[1]'.green} Show all tasks.`,
                },{
                    value: '2',
                    name: `${'[2]'.green} Show all pending tasks.`,
                },{
                    value: '3',
                    name: `${'[3]'.green} Show all completed tasks.`,
                },{
                    value: '4',
                    name: `${'[4]'.green} Create a new task.`,
                },{
                    value: '5',
                    name: `${'[5]'.green} Complete a task.`,
                },{
                    value: '6',
                    name: `${'[6]'.green} Delete a task.`,
                },{
                    value: '0',
                    name: `${'[0]'.green} Close.`,
                },
            ]
        }
    ]

    console.clear()
    const { option } = await inquirer.prompt(questions)

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

module.exports = {
    getOptionFromInquirerMenu,
    pauseConsole
}