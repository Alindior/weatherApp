import React from "react";
import { CardMedia, CardHeader, CardContent, Card } from "@material-ui/core";

import { useStyles } from "./StylesForWeatherToday";
import { IWeather } from "../../../interfaces/IWeather";
import { WeatherInfo } from "./WeatherInfo";

interface CurrentWeatherProps {
  currentWeather: IWeather;
}

export const WeatherToday = ({ currentWeather }: CurrentWeatherProps) => {
  const { list, city: { name } } = currentWeather;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={name} subheader={list[0].dt_txt} />
      <CardMedia>
        <img
          src={`http://openweathermap.org/img/w/${list[0].weather[0].icon}.png`}
          alt="icon"
          className={classes.icon}
        />
      </CardMedia>
      <WeatherInfo wind={list[0].wind} temp={list[0].main}/>
    </Card>
  );
};
