const form = document.querySelector(".change-location");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const getUpdates = async (city) => {
  const cityDet = await getCity(city);
  const weather = await getWeather(cityDet.Key);
  return { cityDet, weather };
};
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const city = form.city.value.trim();
  form.reset();
  getUpdates(city)
    .then((data) => {
      console.log(data);
      details.innerHTML = `<h5 class="my-3">${data.cityDet.EnglishName}</h5>
                <div class="my-3">${data.weather.WeatherText}</div>
                  <div class="display-4 my-4">
                    <span>${data.weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                  </div>
                  `;
      if(card.classList.contains('d-none')){
        card.classList.remove('d-none')

      }
    })
    .catch((err) => console.log(err));
});
