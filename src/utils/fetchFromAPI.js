import aixos from "axios";
require('dotenv').config();

const axios = require("axios");

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  //   method: 'GET',
  url: BASE_URL,
  params: { id: "dQw4w9WgXcQ" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
