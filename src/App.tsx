import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import "./styles/index.scss";

import { NavBar } from "./components/NavBar/NavBar";
import { IRootState } from "./interfaces/IRootState";
import { IWeather } from "./interfaces/IWeather";
import {
  deleteHistoryItem,
  loadHistory,
  setCurrentCity,
} from "./store/actions/weather";
import { WeatherToday } from "./components/Content/WeatherTodat/WeatherToday";
import { PredictionWeatherList } from "./components/Content/PredictionWeatherList";
import { History } from "./components/History/History";
import { AlertError } from "./components/Alert";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHistory());
  }, []);
  const { currentCity, history, error } = useSelector(
    (state: IRootState) => state.weather
  );
  const onDeleteHistory = (index: number) => {
    dispatch(deleteHistoryItem(index));
  };
  const onSetWeather = (historyItem: IWeather) => {
    dispatch(setCurrentCity(historyItem));
  };
  return (
    <Container className="container">
      {error && <AlertError text={error} />}
      <NavBar />
      <div className="main__container">
        {currentCity ? (
          <div className="weather__current-city">
            <WeatherToday currentWeather={currentCity} />
            <PredictionWeatherList predictions={currentCity.list} />
          </div>
        ) : (
          <h1>Please, choose any city</h1>
        )}
        <History
          history={history}
          onDelete={onDeleteHistory}
          onSelect={onSetWeather}
        />
      </div>
    </Container>
  );
};
