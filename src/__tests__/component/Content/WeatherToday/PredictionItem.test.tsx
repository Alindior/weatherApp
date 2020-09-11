import React from "react";
import { shallow } from "enzyme";
import { testWeather } from "../../../store/actions/weather.test";
import { WeatherToday } from "../../../../components/Content/WeatherTodat/WeatherToday";

describe("render display WeatherToday component", () => {
  it("should display component with props", () => {
    const container = shallow(<WeatherToday currentWeather={testWeather} />);

    expect(container.length).toEqual(1);
  });
});
