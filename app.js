const getData = async () => {
  
  const url = "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=XnHXzqWAsibRqMprXaZJGxbOw_iIMqO2z9ZyvePxlHE"

  try {
    const response = await axios.get(url)
    console.log(response.data)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
getData()


//select input form and button
const input = document.querySelector("#search-plant")
const button = document.querySelector("#button")

//create event listener for when you click the button, so that we can use the aync/await to get the plant data from the API

//create a div for the plants

//may need to limit the number of plants displayed

//create an element for the plant common-name and append it to the div

//create an element for the plant photo and append it to the div

//create an element for the plant scientific name and append it to the dom

//create function to remove a plant when you search for a new movie

//create a line that makes it so if a plant does not have an image it will not be displayed

