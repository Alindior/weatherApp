import { config } from "../config";

export class WeatherService {
    async getWeather(city: string) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.API_KEY}`);
            const data = await response.json();
            return data;
        }catch(e){
            console.log("Error", e);
            throw new Error(e);
        }
    }
}