const iss_map = L.map('iss_map').setView([0, 0], 1);
const attribution = '&copy: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{ x}/{y}.png"
const tiles = L.tileLayer(tileUrl, { attribution})
tiles.addTo(iss_map)

const iss_icon = L.icon({
    iconUrl: '../images/International_Space_Station.svg.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], {icon: iss_icon}).addTo(iss_map);

const url = 'https://api.wheretheiss.at/v1/satellites/25544'
let first = true
async function get_iss(){
    const response = await fetch(url)
    const data = await response.json()
    const { latitude, longitude} = data
    marker.setLatLng([latitude, longitude])
    if (first){
        iss_map.setView([latitude, longitude],4)
        first = false
    }
    iss_map.setView([latitude, longitude])
    document.getElementById("lat").innerHTML = latitude.toFixed(2)+'\xB0'
    document.getElementById("lon").innerHTML = longitude.toFixed(2)+'\xB0'
}
get_iss()
setInterval(get_iss, 1000);
