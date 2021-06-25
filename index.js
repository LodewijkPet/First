const express = require('express')
const Datastore = require('nedb')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`listening at ${port}`)
})
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}))

const database = new Datastore('database.db')
database.loadDatabase()

app.get('/api', (request, response) =>{
    database.find({}, (err, data)=>{
        if (err) {
            response.end()
            return
        }
        response.json(data)
    })
})

app.post('/api', (request, response) =>{
    console.log('I got a request')
    const data = request.body
    const timestamp = Date.now()
    data.timestamp = timestamp
    database.insert(data)
    response.json(data)
})

app.get('/weather/:latlon', async (request, response) =>{
    console.log(request.params)
    const latlon = request.params.latlon.split(',')
    console.log(latlon)
    const lat = latlon[0]
    const lon = latlon[1]
    console.log(lat, lon)
    const api_key = process.env.API_KEY
    const weather_URL = `https://weerlive.nl/api/json-data-10min.php?key=${api_key}&locatie=${lat},${lon}`
    const weather_response = await fetch(weather_URL)
    const weather_json_data = await weather_response.json()

    const air_quality_lat = parseFloat(lat).toFixed(8)
    const air_quality_lon = parseFloat(lon).toFixed(8)
    //const air_quality_URL = 'https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/latest?limit=100&page=1&offset=0&sort=desc&coordinates=52.39%2C4.88781&radius=1000&order_by=lastUpdated&dumpRaw=false'
    const air_quality_URL = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/latest?limit=100&page=1&offset=0&sort=desc&coordinates=${air_quality_lat}%2C${air_quality_lon}&radius=10000&order_by=lastUpdated&dumpRaw=false`
    //const air_quality_URL = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/latest?limit=100&page=1&offset=0&sort=desc&coordinates=${lat}%2C${lon}1&radius=5000&order_by=lastUpdated&dumpRaw=false`
    const air_quality_response = await fetch(air_quality_URL)
    const air_quality_json_data = await air_quality_response.json()

    const data = {
        weather: weather_json_data,
        air_quality: air_quality_json_data
    }
    response.json(data)
})
