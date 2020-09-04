import React from "react";
import { PredictionItem } from "./PredictionWeatherItem";

interface PredictionWeatherListProps {
 predictions: any,
 children?: React.ReactNode
}

export const PredictionWeatherList = ({ predictions }: PredictionWeatherListProps) => {
 return (
  predictions.map((item: any, index: number) => {
   if (index % 8 === 0) {
    return <PredictionItem weather={item} key={item.dt} />
   }
  })
 )
}