import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Header } from "../components/Header/Header";
import { Content } from "../components/Content/Content";
import { getWeather, setCurrentCity, deleteHistoryItem } from "../store/weather/actions";

export const MainContainer = () => {
 const dispatch = useDispatch();
 const { currentCity, history } = useSelector((state: any) => state.weather);
 const onSearchCity = (city: string) => {
  dispatch(getWeather(city));
 }
 const removeHostoryItem = (index: number) => {
  dispatch(deleteHistoryItem(index));
 }
 const setCurrentHistoryItem = (historyItem: object) => {
  dispatch(setCurrentCity(historyItem));
 }
 return (
  <>
   <Header onSearch={onSearchCity} />
   <Content
    currentCity={currentCity}
    history={history}
    onSelectCity={setCurrentHistoryItem}
    onDeleteHistory={removeHostoryItem}
   />
  </>
 )
}