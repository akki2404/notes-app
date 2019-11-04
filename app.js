// const add = require('./utils.js');
// const sum = add(4,-2)
// console.log(sum)

//const validator = require('validator')
 const notes = require('./notes.js')
// // const str = getn()
const chalk = require('chalk')
const yargs = require('yargs')
// console.log(chalk.bold.inverse.red('Error!'))
// console.log(process.argv)
yargs.version('1.1.0')
// Create a add command
yargs.command({
    command: 'add',
    describe:'Add a new note!!',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//Create a remove command
yargs.command({
    command: 'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//Create a list command
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler(){
        notes.listNotes()
    }
})
//Create a read command
yargs.command({
    command:'read',
    describe:'Read the notes',
    builder:{
        title:{
            describe:'Reading Notes',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
       notes.readNote(argv.title)
    }
})
yargs.parse()
//  console.log(yargs.argv)

