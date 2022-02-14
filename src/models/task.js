const { v4: uuidv4 } = require('uuid')

class Task {

    /**
     * @param {string} description Description of task.
     * @param {string} id ID of the task.
     * @param {string} completedAt String with date of completition.
     */
    constructor(description, id = uuidv4(), completedAt = null) {
        this.id = id 
        this.description = description
        this.completedAt = completedAt 
    }

}

module.exports = Task