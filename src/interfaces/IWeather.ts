interface City {
  coord: object;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface IWeatherDay {
  cloud: object;
  dt: number;
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: object;
  visibility: number;
  weather: {
    icon: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

export interface IWeather {
  city: City;
  cnt: number;
  cod: string;
  list: IWeatherDay[];
  message: string;
}
