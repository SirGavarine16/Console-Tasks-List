const fs = require('fs')

const pathname = './src/db/data.json'

const saveDataOnDB = (data) => {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFileSync(pathname, JSON.stringify(data))
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

const readDataOnDB = () => {
    return new Promise((resolve, reject) => {
        try {
            if (!fs.existsSync(pathname)) {
                resolve(null)
            }
            const fileData = fs.readFileSync(pathname, { encoding: 'utf-8'})
            const data = JSON.parse(fileData)
            if (data.length === 0) {
                resolve(null)
            }
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    saveDataOnDB,
    readDataOnDB
}