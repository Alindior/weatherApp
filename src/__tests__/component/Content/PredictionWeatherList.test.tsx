import React from "react";
import { mount } from "enzyme";

import { PredictionWeatherList } from "../../../components/Content/PredictionWeatherList";
import { testWeatherItem } from "./PredictionItem.test";

const renderList = () => {
  const weathers = [testWeatherItem, testWeatherItem];
  const wrapper = mount(<PredictionWeatherList predictions={weathers} />);
  return {
    weathers,
    wrapper,
  };
};

describe("render weathers array with PredictionWeatherList", () => {
  it("should ", () => {
    const { wrapper, weathers } = renderList();
    expect(wrapper).toHaveLength(1);
  });
});
