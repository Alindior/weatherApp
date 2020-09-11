import React from "react";
import Typography from "@material-ui/core/Typography";
import { CardContent } from "@material-ui/core";

import { getCelsiusTemperature, getWindDirection } from "../../../utils";
import { useStyles } from "./StylesForWeatherToday";;

interface IWeatherInfoProps {
  wind: {
    deg: number;
    speed: number;
  };
  temp: {
    temp_max: number;
    temp_min: number;
  };
}

export const WeatherInfo = ({ wind, temp }: IWeatherInfoProps) => {
  const classes = useStyles();
  return (
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="div">
        <div className={classes.weather__info}>
          <div className="weather__temperature">
            {getCelsiusTemperature(temp.temp_max)} -{" "}
            {getCelsiusTemperature(temp.temp_min)} C
          </div>
          <div className={classes.weather__wind}>
            <div className="weather__wind-direction">
              {getWindDirection(wind.deg)}
            </div>
            <div className="weather__wind-speed">
              {Math.ceil(wind.speed)} m/s
            </div>
          </div>
        </div>
      </Typography>
    </CardContent>
  );
};
