
const { v4: uuidv4 } = require('uuid')

class Task {

    /**
     * @param {string} description 
     */
    constructor(description, id = uuidv4(), completedAt = null) {
        this.id = id 
        this.description = description
        this.completedAt = completedAt 
    }

}

module.exports = Task