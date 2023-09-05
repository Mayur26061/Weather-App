console.log("Hello");
let loc= undefined;
let weather= undefined;
const key = "PjAnxdEyfjUgDkJWpPAYmF1huEkH3VaC";
// const input =
const getWeather = async () => {
    const location = await getCity("New York");
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const params = `${location.Key}?apikey=${key}`;
    const response = await fetch(base + params);
    const data = await response.json()
    loc = location
    weather = data[0]
    console.log(data)
};
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};
// getWeather('349727')
// // getCity("mumbai")
// //     .then((data) => {
// //         console.log(data.Key)
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     })
