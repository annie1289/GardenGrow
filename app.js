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

// const fetch = require('node-fetch');

// (async () => {
//   const response = await fetch('https://trefle.io/api/v1/plants?token=XnHXzqWAsibRqMprXaZJGxbOw_iIMqO2z9ZyvePxlHE');
//   const json = await response.json();
//   console.log(json);
// })();