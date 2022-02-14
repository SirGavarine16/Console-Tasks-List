const { saveDataOnDB, readDataOnDB } = require('./src/helpers/file')
const { getOptionFromInquirerMenu, pauseConsole, readInput, getConfirmation, getTaskIDToDelete } = require('./src/helpers/inquirer')
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
            case '2':
                myTasks.showTasksFiltered(false)
                await pauseConsole()
                break
            case '3':
                myTasks.showTasksFiltered()
                await pauseConsole()
                break
            case '4':
                const description = await readInput('Description: ', 'Please add a description...')
                myTasks.createTask(description)
                await pauseConsole()
                await saveDataOnDB(myTasks.getTasklistArray())
                break
            case '6':
                const taskID = await getTaskIDToDelete(myTasks.getTasklistArray())
                if (taskID !== '0') {
                    const confirm = await getConfirmation('Are you sure?')
                    if (confirm) {
                        myTasks.deleteTask(taskID)
                        await saveDataOnDB(myTasks.getTasklistArray())
                    }
                }
                await pauseConsole()
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