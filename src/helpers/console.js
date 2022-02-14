require('colors')


const getOptionFromMenu = () => {
    return new Promise((resolve, reject) => {
        console.clear()
        showMenuOnConsole()
        try {
            const cmdInterface = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            })
            cmdInterface.question(`Select an option: `, (option) => {
                cmdInterface.close()
                resolve(option)
            })
        } catch (error) {
            reject(error)
        }
    })
}

const showMenuOnConsole = () => {
    console.log(`=====================`.green)
    console.log(`   Task List Menu`.green)
    console.log(`=====================\n`.green)
    const options = [
        `Show all tasks.`,
        `Show all pending tasks.`,
        `Show all completed tasks.`,
        `Create a new task.`,
        `Complete a task.`,
        `Delete a task.`,
        `Close.\n`,
    ]
    options.forEach((option, index) => {
        const optionIndex = `[${index + 1}]`
        console.log(`${optionIndex.green} ${option}`)
    })
}

const pauseConsole = () => {
    return new Promise((resolve, reject) => {
        try {
            const cmdInterface = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            })
            cmdInterface.question(`Press ${'ENTER'.green} to continue...\n`, () => {
                cmdInterface.close()
                resolve()
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getOptionFromMenu,
    pauseConsole,
}