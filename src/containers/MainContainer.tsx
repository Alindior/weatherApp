import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../components/Header/Header";
import { Content } from "../components/Content/Content";
import { getWeather, setCurrentCity, deleteHistoryItem } from "../store/weather/actions";

export const MainContainer = () => {
 const dispatch = useDispatch();
 const { currentCity, history, error } = useSelector((state: any) => state.weather);
 const onSearchCity = (city: string) => {
  dispatch(getWeather(city));
 }
 const removeHostoryItem = (index: number) => {
  dispatch(deleteHistoryItem(index));
 }
 const setCurrentHistoryItem = (historyItem: any) => {
  dispatch(setCurrentCity(historyItem));
 }
 return (
  <>
   <Header onSearch={onSearchCity} />
   <Content
    error={error}
    currentCity={currentCity}
    history={history}
    onSelectCity={setCurrentHistoryItem}
    onDeleteHistory={removeHostoryItem}
   />
  </>
 )
}