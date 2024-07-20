import axios from 'axios';

export const getHelthData = () => {
  console.log("Fetching health data...");
  return axios.get('/Health_News.json')
    .then(response => {
      console.log("Data fetched:", response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Error fetching health data:", error.response ? error.response.data : error.message);
      throw error;
    });
};
