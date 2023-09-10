const form = document.querySelector(".change-location");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const icon = document.querySelector(".icon img")

const updateUI = (data) => {
  const { cityDet, weather } = data
  details.innerHTML = `<h5 class="my-3">${cityDet.EnglishName}</h5>
                          <div class="my-3">${weather.WeatherText}</div>
                          <div class="display-4 my-4">
                            <span>${weather.Temperature.Metric.Value}</span>
                            <span>&deg;C</span>
                          </div>`;
  let src = weather.IsDayTime ? "../img/day.svg" : "../img/night.svg";
  let ic_src = `../img/icons/${weather.WeatherIcon}.svg`
  icon.setAttribute("src", ic_src)
  card.firstElementChild.setAttribute("src", src);
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
}
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
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
