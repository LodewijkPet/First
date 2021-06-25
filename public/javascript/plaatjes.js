const images = ['../images/davenport.jpg', '../images/RAAS.jpg']

get_images(images)
    
    .catch(error =>{
        console.log('error!')
        console.log('Something terrible has happened :(')
        console.error(error)
    })
    
async function get_images(){
    console.log('getting images...')
    for (let image of images) {
        const response = await fetch(image)
        const blob = await response.blob()
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        img.width = 200
        document.body.append(img)
        console.log('putting the image on le page!')
    }
    console.log('got all images now!')
}

get_text()
    .then(text =>{
        const txt = document.createElement('p')
        txt.innerHTML = text
        document.body.append(txt)
    })
    .catch(error =>{
        console.log('error!')
        console.error(error)
    })
async function get_text(){
    const response = await fetch('../textfiles/testtext.txt')
    const text = await response.text()
    return text
}