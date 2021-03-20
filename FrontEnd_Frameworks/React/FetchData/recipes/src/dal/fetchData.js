import axios from "axios";
const BASE_URL = "https://api.edamam.com/search";
const REQUEST_PARAMS = {
  app_id: "246a19ff",
  app_key: "cea59b308f96c9c0a03b6d4c8a4b6ff3",
};

const fetchData = (searchParam) => {
  return fetch(
    `${BASE_URL}?q=${searchParam}&app_id=${REQUEST_PARAMS.app_id}&app_key=${REQUEST_PARAMS.app_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.hits;
    })
    .catch((err) => {
      throw err;
    });
};
const axiosFetchData = async (searchParam) => {
  return await axios
    .get(BASE_URL, {
      params: Object.assign(REQUEST_PARAMS, { q: searchParam }),
    })
    .then((data) => {
      return data.data.hits;
    })
    .catch((err) => {
      throw err;
    });
};
export { fetchData, axiosFetchData };
