console.log("Hello");
let loc = undefined;
let weather = undefined;
const key = "PjAnxdEyfjUgDkJWpPAYmF1huEkH3VaC";
// const input =
const getWeather = async (city) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const params = `${city}?apikey=${key}`;
  const response = await fetch(base + params);
  const data = await response.json()
  return data[0]
};
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};
