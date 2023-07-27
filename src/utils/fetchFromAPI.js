import aixos from "axios";

const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  // method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "8108640b0cmsh13fdccc41fbc535p1ffdc2jsn90e669fddbfb",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
