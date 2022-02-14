const { getOptionFromInquirerMenu, pauseConsole } = require('./src/helpers/inquirer')

require('colors')


const main = async () => {

    let optionSelected = ''

    do {
        optionSelected = await getOptionFromInquirerMenu()
        if (optionSelected !== '0') {
            console.log(`\nOption selected is: ${optionSelected}.\n`)
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