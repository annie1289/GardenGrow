//select input form and button
const input = document.querySelector("#search-plant")
const button = document.querySelector("#button")
//const randombutton = document.querySelector("#button2")

//create event listener for when you click the button, so that we can use the aync/await to get the plant data from the API
button.addEventListener('click', async () => {
  let value = input.value
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=XnHXzqWAsibRqMprXaZJGxbOw_iIMqO2z9ZyvePxlHE&q=${value}`, {"headers": {"Access-Control-Allow-Origin": "*"}})
  console.log(response.data.data)
  findAll(response.data.data)
})
//figure out how to print info to the website

//then figure out how to print specific information
//figure out how to remove input value from bar and all stuff as well
//plants section
const plantDisplay = document.querySelector(".plants")
const findAll = plants => {
  plants.forEach(plant => {
    const plantContainer = document.createElement('div')
    plantContainer.className = "plant-container"

    const comName = document.createElement('h3')
    comName.innerHTML = `${plant.common_name}`
    plantContainer.appendChild(comName)

    const sciName = document.createElement('p')
    sciName.innerHTML = `${plant.scientific_name}`
    plantContainer.appendChild(sciName)

    const image = document.createElement('img')
    image.src = plant.image_url
    plantContainer.appendChild(image)

    plantDisplay.appendChild(plantContainer);
  })
}