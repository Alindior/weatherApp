import React from "react";
import { mount } from "enzyme";

import { testWeather } from "../../store/actions/weather.test";
import { HistoryItem } from "../../../components/History/HistoryItem";

const testProps = {
  item: testWeather,
  onSelect: jest.fn(),
  onDelete: jest.fn(),
  index: 0,
};

describe("render HistoryItem component", () => {
  const wrapper = mount(<HistoryItem {...testProps} />);
  it("should render component with props", () => {
    wrapper.find(".MuiListItem-container").simulate("click");

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find("span").at(0).text()).toBe(testProps.item.city.name);
  });

  it("emulate click on delete icon", () => {
    wrapper.find(".MuiIconButton-label").simulate("click");
    expect(testProps.onDelete).toHaveBeenCalled();
    expect(testProps.onDelete).toHaveBeenCalledWith(testProps.index);
  });
});
