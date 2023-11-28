const api_key = "07cl6tVuzL4NW4jBxao6Bwh01HV8SOuUeSUcoj7h"


const fetchUrl = async (url) => {
  const data = await fetch(url)
  return data.json()
}

/* const apodComponent = (astrologyPictureOfTheDay) => {
  //console.log(apod.title)                         //destructuring
  const ( title, url, date, explanation) = astrologyPictureOfTheDay
  console.log(title)
  console.log(url)                A
  console.log(date)               |
  console.log(explanation)        |
} */
const apodComponent = ({ title, url, date, explanation }) => {
  //console.log(apod.title)                         //destructuring2
  console.log(title)
  console.log(url)
  console.log(date)
  console.log(explanation)
}

async function init() {
  const data = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`)
  console.log(data)

  for(let i = 0; i < data.length; i++){
    apodComponent(data[i])
  }
  
}

init()