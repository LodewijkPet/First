get_data()
async function get_data() {
    const response = await fetch('/api')
    const data = await response.json()
    for (const item of data) {
        const root = document.createElement('section')
        root.classList.add("database_profile")
        const paragraph = document.createElement('p')
        if (item.hasOwnProperty('weather')){
            const stad = document.createElement('span')
            const geo = document.createElement('span')
            const time = document.createElement('span')
            const weather = document.createElement('span')
            const air_quality = document.createElement('section')

            const par_array = [stad, geo, time, weather, air_quality]

            stad.textContent = `Location: ${item.weather.plaats}`
            geo.textContent = `Coördinaten: ${item.lat.toFixed(2)}${'\xB0'} ${item.lon.toFixed(2)}${'\xB0'}`
            time.textContent = `Time: ${new Date(item.timestamp).toLocaleDateString()}`
            weather.textContent = `Forecast: ${item.weather.verw}`

            const air_quality_section = present_air_quality(item)
            root.append(air_quality_section)

            par_array.forEach(span =>{
                const br = document.createElement('br')
                paragraph.append(span, br)
            })
            root.append(paragraph)
            document.body.append(root)
        } else {
            const naam = document.createElement('span')
            const geo = document.createElement('span')
            const time = document.createElement('span')
            const word = document.createElement('span')
            const image = document.createElement('img')
    
            const par_array = [naam, geo, time, word]
    
            naam.textContent = `Name: ${item.my_name}`
            geo.textContent = `Location: ${item.lat.toFixed(2)}${'\xB0'} ${item.lon.toFixed(2)}${'\xB0'}`
            time.textContent = `Time: ${new Date(item.timestamp).toLocaleDateString()}`
            word.textContent = `Favorite word: ${item.my_favorite_word}`
            image.src = item.image64
    
            par_array.forEach(span =>{
                const br = document.createElement('br')
                paragraph.append(span, br)
            })
            root.append(paragraph, image)
            document.body.append(root)
        }
    }
    console.log(data)
}
fetch('/api')