import React from "react";
import { mount } from "enzyme";

import { PredictionItem } from "../../../components/Content/PredictionItem";

export const testWeatherItem = {
  cloud: {},
  dt: 123,
  dt_txt: "23.405.12",
  main: {
    temp_max: 271,
    temp_min: 289,
  },
  pop: 124,
  sys: {},
  visibility: 142,
  weather: [
    {
      icon: "io8",
    },
  ],
  wind: {
    deg: 271,
    speed: 258,
  },
};
describe("render PredictionItem component", () => {
  it("should render component PredictionItem with props", () => {
    const wrapper = mount(<PredictionItem weather={testWeatherItem} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(".prediction__date")).toHaveLength(1);
    expect(wrapper.find(".prediction__date").text()).toBe(testWeatherItem.dt_txt);
  });
});
