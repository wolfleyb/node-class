const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


yargs.version('1.0.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    builder: {

    },
    handler: function() {
        console.log('This will eventually list my notes')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Not sure what this one does',
    handler: function() {
        console.log('Not sure what the read command does...')
    }
})

console.log(yargs.argv)