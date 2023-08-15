import axios from "axios";

// const BASE_API = process.env.NEXT_PUBLIC_BASE_API;
const BASE_API = "https://api-dev.dikahadir.com";

function ServiceAdapter() {
  console.log("mmamamamam", BASE_API);
  return axios.create({
    baseURL: BASE_API,
    responseType: "json",
  });
}

export default ServiceAdapter;
