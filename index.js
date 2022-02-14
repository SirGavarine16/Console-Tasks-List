require('colors')

const { getOptionFromMenu, pauseConsole } = require('./src/helpers/console')



const main = async () => {

    let optionSelected = ''

    do {
        optionSelected = await getOptionFromMenu()
        console.log(`\nOption selected is: ${optionSelected}.\n`)
        if (optionSelected !== '0') {
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