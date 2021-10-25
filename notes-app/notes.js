const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    console.log(chalk.bold.green('Your notes'))
    
    const notes = loadNotes()
    notes.forEach(note => console.log(note.title))
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
    
        saveNotes(notes)
        console.log(chalk.green("New note added!"))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep)


    if (notes.length === notesToKeep.length) {
        console.log(chalk.red('No note found!'))
    } else {
        console.log(chalk.green('Note removed!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

const getNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note != undefined)
    {
        console.log(chalk.yellowBright('Title: ' + note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('Error: No note found'))
    }

}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    getNote: getNote,
}