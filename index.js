const { getOptionFromInquirerMenu, pauseConsole, readInput } = require('./src/helpers/inquirer')
const Tasks = require('./src/models/tasks')

require('colors')


const main = async () => {

    let optionSelected = ''
    const myTasks = new Tasks()

    do {
        optionSelected = await getOptionFromInquirerMenu()

        switch (optionSelected) {
            case '1':
                console.log(myTasks.tasklist)
                await pauseConsole()
                break
            case '4':
                const description = await readInput('Description: ', 'Please add a description...')
                myTasks.createTask(description)
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