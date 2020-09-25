const input = document.querySelector("#search-plant")
const button = document.querySelector("#button")
//search button
button.addEventListener('click', async () => {
  let value = input.value
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=XnHXzqWAsibRqMprXaZJGxbOw_iIMqO2z9ZyvePxlHE&q=${value}`, {"headers": {"Access-Control-Allow-Origin": "*"}})
  console.log(response.data.data)
  findAll(response.data.data)
})
//random button
button2.addEventListener('click', async () => {
  let page = Math.ceil((Math.random() * 1000))
  console.log(page)
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=XnHXzqWAsibRqMprXaZJGxbOw_iIMqO2z9ZyvePxlHE&page=${page}`, {"headers": {"Access-Control-Allow-Origin": "*"}})
  console.log(response.data.data)
  findAll(response.data.data)
})

const plantDisplay = document.querySelector(".plants")
//finds common name, scientific name, family, and a photo of the search results
const findAll = plants => {
  removePlants()
  plants.forEach(plant => {
    const plantContainer = document.createElement('div')
    plantContainer.className = "plant-container"
    if (plant.common_name !== null && plant.family !==null && plant.scientific_name !==null && plant.image_url !== null) {
    const comName = document.createElement('h3')
    comName.innerHTML = `${plant.common_name}`
    plantContainer.appendChild(comName)
    const sciName = document.createElement('p')
    sciName.innerHTML = `Scientific Name: ${plant.scientific_name}`
    plantContainer.appendChild(sciName)
    const family = document.createElement('p')
    family.innerHTML = `Family: ${plant.family}`
    plantContainer.appendChild(family)
    const image = document.createElement('img')
    image.src = plant.image_url
    plantContainer.appendChild(image)
    }

    plantDisplay.appendChild(plantContainer);
    document.querySelector('#search-plant').value = ''
  })
}

//function to remove plants when you search
function removePlants() {
  const removeDiv = document.querySelector('.plants')
  while (removeDiv.lastChild) {
    (removeDiv.removeChild(removeDiv.lastChild))
  }
}
