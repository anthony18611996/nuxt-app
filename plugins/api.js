export default function ({ $axios }, inject) {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const api = $axios.create({
    timeout: 5000,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  });

  api.setBaseURL(API_URL);

  inject("api", api);
}
