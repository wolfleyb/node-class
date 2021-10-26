const https = require('https')

lat = '40.32'
lon = '-75.0'

url = 'https://api.openweathermap.org/data/2.5/onecall?lat='
+ lat + '&lon=' + lon + 
'&appid=5fe721189843f1db26105d5371c21587&units=imperial'


const request = https.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()


    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An Error: ', error)
})

request.end()