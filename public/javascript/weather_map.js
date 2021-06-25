const weather_map = L.map('weather_map').setView([0, 0], 1);
const attribution = '&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{ x}/{y}.png"
const tiles = L.tileLayer(tileUrl, { attribution})
tiles.addTo(weather_map)

//const iss_icon = L.icon({
//    iconUrl: '../images/International_Space_Station.svg.png',
//    iconSize: [50, 32],
//    iconAnchor: [25, 16]
//});
//

//const url = 'https://api.wheretheiss.at/v1/satellites/25544'
//let first = true
async function get_weather_map(){
    const response = await fetch('/api')
    const data = await response.json()
    console.log('getting data')
    console.log(data)
    console.log('happy?')
    const time = data.timestamp

    for (const item of data) {
        const marker = L.marker([item.lat, item.lon]).addTo(weather_map);
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
        console.log(text)
        marker.bindPopup(text)
    }
//    const { latitude, longitude} = data
//    marker.setLatLng([latitude, longitude])
//    if (first){
//        weather_map.setView([latitude, longitude],4)
//        first = false
//    }
//    weather_map.setView([latitude, longitude])
//    document.getElementById("lat").innerHTML = latitude.toFixed(2)+'\xB0'
//    document.getElementById("lon").innerHTML = longitude.toFixed(2)+'\xB0'
}
get_weather_map()