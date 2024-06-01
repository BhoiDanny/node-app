const request = require('postman-request')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=d7abc8787362078170183df48c04b2e6&units=metric'

request({url: url, json: true}, (err, res) => {
    // console.log(res.body)
    console.log(`It is currently ${res.body.main.temp} degrees out. It feels like ${res.body.main.feels_like} degrees out.`)
})