import React from "react";
import { mount } from "enzyme";

import { WeatherInfo } from "../../../../components/Content/WeatherTodat/WeatherInfo";

describe("display WeatherInfo component with props", () => {
  it("should render component with props", () => {
    const testProps = {
      wind: {
        deg: 281,
        speed: 24,
      },
      temp: {
        temp_max: 271,
        temp_min: 284,
      },
    };
    const wrapper = mount(<WeatherInfo {...testProps} />);

    expect(wrapper).toHaveLength(1);
  });
});
