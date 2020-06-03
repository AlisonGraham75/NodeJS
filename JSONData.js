const fs = require('fs')
const chalk = require('chalk')

const listData = ()  => {
    console.log(chalk.green('Your Data...'))
    const data = loadData()
    data.forEach( (myData)=>{
        console.log(myData.title)
    })

}
const addData = (title, body) => {
    const data = loadData()
    const duplicateNote = data.find((myData) => myData.title === title)

    if (!duplicateNote) {
        data.push({
            title: title,
            body: body
        })
        saveData(data)
        console.log(chalk.green.inverse('New data added'))
    } else {
        console.log(chalk.red.inverse('Data title taken!'))
    }
   
}

const removeData = (title) => {
    const data = loadData()
    const dataToKeep = data.filter((myData) => myData.title !== title)
    const keepDataJSON = JSON.stringify(dataToKeep);
    const originalJSON = JSON.stringify(data)
    if (keepDataJSON.length < originalJSON.length) {
        saveData(dataToKeep) 
        console.log(chalk.bgGreen("Data removed!"))
    } else {
        console.log(chalk.bgRed("No Data found!"))
    }
}

const readData = (title) => {
    const data = loadData()

    const dataFound = data.find((myData) => myData.title === title)
    
    if (dataFound) {
        console.log(chalk.greenBright(dataFound.title))
        console.log(dataFound.body)
    } else {
        console.log(chalk.red("ERROR:Data Not Found"))
    }


}
const saveData = (myData) => {
    const dataJSON = JSON.stringify(myData)
    fs.writeFileSync('data.json', dataJSON)
}
const loadData = () => {
    
    try {
        const dataBuffer = fs.readFileSync('data.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

module.exports = {
    addData: addData,
    removeData: removeData,
    listData: listData,
    readData: readData
}