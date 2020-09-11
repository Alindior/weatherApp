import React from "react";
import { mount } from "enzyme";
import { History } from "../../../components/History/History";
import { testWeather } from "../../store/actions/weather.test";

const testProps = {
  history: [testWeather, testWeather],
  onDelete: jest.fn(),
  onSelect: jest.fn(),
};

describe("render History component", () => {
  const wrapper = mount(<History {...testProps} />);
  it("should display History component", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render children items", () => {
    const listElement = wrapper.find(".MuiList-root");
    expect(wrapper.find(".MuiList-root")).toHaveLength(2);

    listElement.forEach((elementWrapper, index) => {
      expect(elementWrapper.find(".MuiListItemText-root").at(1).text()).toBe(
        testProps.history[index].city.name
      );
    });
  });
});
