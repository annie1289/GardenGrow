//select input form and button
const input = document.querySelector("#search-plant")
const button = document.querySelector("#button")
const randombutton = document.querySelector("#button2")

//create event listener for when you click the button, so that we can use the aync/await to get the plant data from the API
button.addEventListener('click', async () => {
  let value = input.value
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=XnHXzqWAsibRqMprXaZJGxbOw_iIMqO2z9ZyvePxlHE&q=${value}`, {"headers": {"Access-Control-Allow-Origin": "*"}})
  console.log(response.data)
  const list = Object.keys(response.data)
  findAll(list)
})

//plants section
const plantDisplay = document.querySelector(".plants")

const findAll = plants => {
  plants.forEach(plant => {
  const plantContainer = document.querySelector('plant-container')
  const comName = document.querySelector('.plantcommonname')
  const sciName = document.querySelector('.scientificname')
  comName.innerHTML = `${plant.common_name}`
  sciName.innerHTML = `${plant.scientific_name}`
  const image = document.createElement('img')
  image.src = plant.image_url
  plantContainer.appendChild(image)
  plantDisplay.appendChild(plantContainer)
  document.querySelector('#search-plant').value =''
  })
}
//create function to remove a plant when you search for a new movie

//create a line that makes it so if a plant does not have an image it will not be displayed

