const weather_map = L.map('weather_map').setView([0, 0], 1);
const attribution = '&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{ x}/{y}.png"
const tiles = L.tileLayer(tileUrl, { attribution})
tiles.addTo(weather_map)

async function get_weather_map(){
    const response = await fetch('/api')
    const data = await response.json()
    console.log('getting data')
    console.log(data)
    console.log('happy?')

    for (const item of data) {
        const marker = L.marker([item.lat, item.lon]).addTo(weather_map);
        if (item.hasOwnProperty('weather')){
            const locatie = item.weather.plaats
            const verwachting = item.weather.verw
            const temperatuur = item.weather.temp
            const windrichting = item.weather.windr
            const windsnelheid = item.weather.windkmh
            const time = new Date(item.timestamp).toISOString()
            
            txt_locatie = `Locatie: ${locatie}.`
            txt_verwachting = `Verwachting: ${verwachting}.`
            txt_temperatuur = `Temperatuur: ${temperatuur +'\xB0'}C.`
            txt_windrichting = `Windrichting: ${windrichting}.`
            txt_windsnelheid = `Windsnelheid: ${windsnelheid}km/uur.`
            txt_time = `Tijd: ${time}`
            
            array_text = [txt_locatie, txt_verwachting, txt_temperatuur, txt_windrichting, txt_windsnelheid, txt_time]
            let text = ''
            array_text.forEach(element => {
                text += `${element} `
            });
            marker.bindPopup(text)
        } else {
            const image = document.createElement('img')
            
            const naam = `Name: ${item.my_name}.`
            const geo = `Location: ${item.lat.toFixed(2)}${'\xB0'} ${item.lon.toFixed(2)}${'\xB0'}.`
            const time = `Time: ${new Date(item.timestamp).toLocaleDateString()}.`
            const word = `Favorite word: ${item.my_favorite_word}.`
            const array_text = [naam, geo, time, word]
            image.src = item.image64

            let text = ''
            array_text.forEach(element => {
                text += `${element} `
            });
            text
            
            marker.bindPopup(text)
//            marker.bindPopup(image)
        }
    }
}
get_weather_map()