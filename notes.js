const fs = require('node:fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgCyan(chalk.black('Your notes')))
    notes.forEach((note, index) => {
        console.log(chalk.green(`${index + 1}. ${note.title}`))
        console.log(chalk.yellow(`${note.body}`))
        console.log(chalk.cyan('-------------------'))
    })

}

const saveNotes = (notes) =>{
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

const loadNotes = () => {
    try {
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    } catch(e){
        return [];
    }
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red('No note found!'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.bgCyan(chalk.black('Your note')))
        console.log(chalk.green(note.title))
        console.log(chalk.yellow(note.body))
    } else {
        console.log(chalk.red('No note found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}