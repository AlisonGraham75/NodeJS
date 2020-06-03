const chalk = require('chalk')
const yargs = require('yargs')
const data = require('./JSONData.js')

//Customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add data',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true, //Makes option required
            type: 'string'
        },
        body: {
            describe: 'Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        data.addData(argv.title, argv.body)
     }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove Data',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true, //Makes option required
            type: 'string'
        }
    },
    handler(argv) {
        data.removeData(argv.title)
     }
})
//create list command
yargs.command({
    command: 'list',
    describe: 'List data',
    handler() {
        data.listData()
     }
})
//create read command
yargs.command({
    command: 'read',
    describe: 'Read one record',
    title: {
        describe: 'Title',
        demandOption: true, //Makes option required
        type: 'string'
    },
    handler(argv) {
        data.readData(argv.title)
     }
})

yargs.parse()