const fs = require('node:fs')
/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
*/

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)
data.name = "Daniel"
data.age = 19

const newData = JSON.stringify(data)

fs.writeFileSync('1-json.json', newData)