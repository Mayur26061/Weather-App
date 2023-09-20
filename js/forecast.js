class Forecast {
  constructor() {
    this.key = <Your Key>;
    this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/"
  }

  async getWeather(id) {
    const params = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + params);
    const data = await response.json()
    return data[0]
  }

  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  };

  async getUpdates(city) {
    const cityDet = await this.getCity(city);
    const weather = await this.getWeather(cityDet.Key);
    return { cityDet, weather };
  }
}
