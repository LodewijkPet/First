async function get_geolocation_info(lat, lon) {
    const api_URL = `/weather/${lat},${lon}`
    const fetch_response = await fetch(api_URL)
    const json_data = await fetch_response.json()
    console.log(json_data)
    const weather = json_data.weather.liveweer[0]
    const air_quality = json_data.air_quality

    const locatie = weather.plaats
    const verwachting = weather.verw
    const temperatuur = weather.temp
    const windrichting = weather.windr
    const windsnelheid = weather.windkmh

    document.getElementById('locatie').innerText = locatie
    document.getElementById('verwachting').innerText = verwachting
    document.getElementById('temperatuur').innerText = temperatuur
    document.getElementById('windrichting').innerText = windrichting
    document.getElementById('windsnelheid').innerText = windsnelheid

    const air_quality_section = present_air_quality(json_data)
    document.getElementById('air_qual').append(air_quality_section)

    const button = document.getElementById('submit_button')
    button.addEventListener('click', async event =>{
        const data = {lat, lon, weather, air_quality}
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const db_response = await fetch('/api', options)
        const db_json_data = await db_response.json()
        console.log(db_json_data)
    })
}

if('geolocation' in navigator) {
    console.log('geolocation available is available')
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        console.log(lat, lon)
        try{
            get_geolocation_info(lat, lon)
        } catch (error){
            console.error(`An error occured! now running with new cords JvL240D: 52.36409371870562, 4.864461137710796`)
            get_geolocation_info(52.36409371870562, 4.864461137710796)
        }
    });
    } else {
    console.log('geolocation available: no')
    console.log('Using default locations JvL240D: 52.36409371870562, 4.864461137710796')
    get_geolocation_info(52.36409371870562, 4.864461137710796)
    /* geolocation IS NOT available */
}