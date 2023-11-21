import axios from "axios";

const client = axios.create({
  baseURL: "https://escola-backend-5kke6.ondigitalocean.app/api/v1/",
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default client;
