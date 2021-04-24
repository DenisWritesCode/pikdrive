const Axios = require("axios");

const baseUrl =
  "https://cors.bridged.cc/https://codechallenge.pikdrive.com/api/";

// Handloes GET endpoints
export default async function apiGet(endPoint) {
  const url = baseUrl + endPoint;
  let data;
  await Axios.get(url)
    .then((res) => {
      data = res.data.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
}

// Handles POST endpoints
export async function apiPost(endPoint, jsonData) {
  const url = baseUrl + endPoint;
  await Axios.post(url, jsonData).catch((error) => {
    console.log(error);
  });
}
