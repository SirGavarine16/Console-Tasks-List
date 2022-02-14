require('colors')

const { saveDataOnDB, readDataOnDB } = require('./src/helpers/file')
const { getOptionFromInquirerMenu, pauseConsole, readInput } = require('./src/helpers/inquirer')
const Tasks = require('./src/models/tasks')



const main = async () => {

    let optionSelected = ''

    const data = await readDataOnDB()
    const myTasks = new Tasks(data)

    do {
        optionSelected = await getOptionFromInquirerMenu()

        switch (optionSelected) {
            case '1':
                myTasks.showAllTasks()
                await pauseConsole()
                break
            case '4':
                const description = await readInput('Description: ', 'Please add a description...')
                myTasks.createTask(description)
                await pauseConsole()
                await saveDataOnDB(myTasks.getTasklistArray())
                break
        }

    } while (optionSelected !== '0')

}


console.clear()
try {
    main()
} catch (error) {
    console.log(error)
}