import React from "react";
import Card from "@material-ui/core/Card";

import { getCelsiusTemperature } from "../../utils";
import { useStyles } from "./StylesForWeatherItem";
import { IWeatherDay } from "../../interfaces/IWeather";

interface IWeatherItemProps {
  weather: IWeatherDay;
}

export const PredictionItem = ({ weather }: IWeatherItemProps) => {
  const classes = useStyles();
  const { dt_txt, main: { temp_min } } = weather;                             
  return (
    <Card className={classes.root}>
      <div className={classes.main__weather_prediction}>
        <div className="prediction__date">
          <p>{dt_txt}</p>
        </div>
        <div className="prediction__icon">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt=""
          />
        </div>
        <div className="prediction__temperature">
          {getCelsiusTemperature(temp_min)} С
        </div>
      </div>
    </Card>
  );
};
