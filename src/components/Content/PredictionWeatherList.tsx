import React from "react";
import { PredictionItem } from "./PredictionItem";

interface IPredictionWeatherListProps {
 predictions: any;
}

export const PredictionWeatherList = ({ predictions }: IPredictionWeatherListProps) => {
 return (
  predictions.map((item: any, index: number) => {
   if (index % 8 === 0) {
    return <PredictionItem weather={item} key={item.dt} />
   }
  })
 )
}