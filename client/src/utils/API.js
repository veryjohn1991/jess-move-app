// Using Axios package for preforming API requests
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = (query) =>
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`);

// Export an object with a "search" method that searches the census API for the passed query
export default search;

//api.census.gov/data/2022/ecnbasic?get=NAICS2022_LABEL,EMP,NAME,GEO_ID&for=us:*&NAICS2022=54&key=YOUR_KEY_GOES_HERE

//api.census.gov/data.json

//api.census.gov/data/2022/ecnbasic