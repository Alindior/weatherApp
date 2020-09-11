import { config } from "../../config";
import { addWeather } from "../LocalStorageService";

const getWeather = async <T>(city: string): Promise<T> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.API_KEY}`
    );
    const data = await response.json();
    if (data.cod === "200") {
      addWeather(data);
    }
    return data;
  } catch (e) {
    console.log("Error", e);
    throw new Error(e);
  }
};

export { getWeather };
