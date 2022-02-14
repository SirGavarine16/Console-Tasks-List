const { saveDataOnDB, readDataOnDB } = require('./src/helpers/file')
const { 
    getOptionFromMainMenu,
    pauseConsole, 
    readInput, 
    getConfirmation, 
    getTaskIDToDelete, 
    getTaskIDsToEdit,  
} = require('./src/helpers/inquirer')
const Tasks = require('./src/models/tasks')

const main = async () => {

    let optionSelected = ''

    const data = await readDataOnDB()
    const myTasks = new Tasks(data)

    do {
        optionSelected = await getOptionFromMainMenu()

        switch (optionSelected) {
            case 'showAllTasks':
                myTasks.showAllTasks()
                break
            case 'showPendingTasks':
                myTasks.showTasksFiltered(false)
                break
            case 'showCompletedTasks':
                myTasks.showTasksFiltered()
                break
            case 'createTask':
                const description = await readInput('Description: ', 'Please add a description...')
                myTasks.createTask(description)
                await saveDataOnDB(myTasks.getTasklistArray())
                break
            case 'completeTask':
                const taskIDs = await getTaskIDsToEdit(myTasks.getTasklistArray())
                myTasks.toggleTasks(taskIDs)
                await saveDataOnDB(myTasks.getTasklistArray())
                break
            case 'deleteTask':
                const taskID = await getTaskIDToDelete(myTasks.getTasklistArray())
                if (taskID !== '0') {
                    const confirm = await getConfirmation('Are you sure?')
                    if (confirm) {
                        myTasks.deleteTask(taskID)
                        await saveDataOnDB(myTasks.getTasklistArray())
                    }
                }
                break
        }

        if (optionSelected !== '0') {
            console.log('\n')
            await pauseConsole()
        }

    } while (optionSelected !== '0')

}


console.clear()
try {
    main()
} catch (error) {
    console.log(error)
}