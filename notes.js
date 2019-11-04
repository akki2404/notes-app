const fs = require('fs')
const chalk = require('chalk')
const getnotes = () =>
{
return "Your notes..."
}
const addNote = (title,body) =>
{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    // const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })
    if (!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        
        console.log(chalk.bold.inverse.green('New note Added!!!'))
    }
    else{
        console.log(chalk.bold.inverse.red('Note title taken'))
        
    }
    

}
const removeNote = (title) =>{
  const notes = loadNotes()
  const notesToKeep = notes.filter((note)=> note.title !== title)
// const notesToKeep = notes.filter(function(note){
//     return note.title !== title
// })
if (notes.length > notesToKeep.length)
{
    saveNotes(notesToKeep)
    console.log(chalk.bold.inverse.green('Note removed!!!'))
}
else{
    console.log(chalk.bold.inverse.red('No note found'))
}
}
const listNotes =   () => {
    console.log(chalk.bold.yellow("Your Notes"))
    const notes = loadNotes()
    notes.forEach((note) =>{
        console.log(note.title)
    })
    

}
const readNote = (title) =>{
    console.log("in note func")
    const notes = loadNotes()
    const notefind = notes.find((note) => note.title === title)
    if(notefind){
        console.log(chalk.blue.bold(notefind.title))
        console.log(notefind.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found'))
    }

}

const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch (e){
        return[]
    }
   
}
module.exports = {
    getnotes:getnotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}