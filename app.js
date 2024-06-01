const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const notes = require('./notes')


yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.addNote(argv.title, argv.body)
        }
    })
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.removeNote(argv.title)
        }
    })
    .command({
        command: 'list',
        describe: 'List your notes',
        handler: function () {
            notes.listNotes()
        }
    })
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.readNotes(argv.title)
        }
    }).parse()


// const command = process.argv[2]
//
// console.log(process.argv)
//
// if(command === 'add') {
//     console.log('Adding notes')
// } else if(command === 'remove') {
//     console.log('removing notes')
// }

// console.log(validator.isEmail('ad@dfs.com'))
// console.log(validator.isURL('https://google.com'))
// console.log(validator.isIMEI('156432165465903215'))
//
// console.log('hello')
//
// console.log(process.argv[2])