function present_air_quality(data) {
    const air_quality = data.air_quality.results
    const eind_section = document.createElement('section')
    air_quality.forEach(result =>{
        const result_section = document.createElement('section')
        result_section.classList.add('location')

        const aq_location = result.location
        const location_header = document.createElement('h3')
        location_header.innerText = aq_location

        const air_quality_results = result.measurements
        const par = document.createElement('p')
        for (let index = 0; index < air_quality_results.length; index++) {
            const result = air_quality_results[index];
            const parameter = `${result.parameter}: `
            const value = result.value
            const unit = result.unit
            const array = [parameter, value, unit]
            const row_span = document.createElement('span')
            const br = document.createElement('br')
            par.append(row_span, br)
            array.forEach(element=>{
                const span = document.createElement('span')
                span.innerText = element
                row_span.append(span)
            })
            result_section.append(location_header, par)
        }
        eind_section.append(result_section)
    })
    return eind_section
}C:\Users\lodew\websites\public