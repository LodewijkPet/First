function setup() {
    noCanvas()
    const video = createCapture(VIDEO)
    video.size(320,240)
    let lat, lon
    const button = document.getElementById('submit_button')
    button.addEventListener('click', async event =>{
        const my_name = document.getElementById("my_name").value
        const my_favorite_word = document.getElementById("my_favorite_word").value
        video.loadPixels()
        const image64 = video.canvas.toDataURL()
        const data = {lat, lon, my_name, my_favorite_word, image64}

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('/api', options)
        const json_data = await response.json()
        console.log(json_data)
    })

    if('geolocation' in navigator) {
        console.log('geolocation available is available')
        navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude
        lon = position.coords.longitude
        console.log(lat, lon)
        document.getElementById('me_lat').innerText = lat.toFixed(2)
        document.getElementById('me_lon').innerText = lon.toFixed(2)
        const api_URL = `/weather/${lat},${lon}`
        const fetch_response = await fetch(api_URL)
        const json_data = await fetch_response.json()
        console.log(json_data)
   });
        } else {
        console.log('geolocation available: no')
        /* geolocation IS NOT available */
    }
}