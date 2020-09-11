import React from "react";
import { mount } from "enzyme";

import { HistoryTitle } from "../../../components/History/HistoryTitle";

const testProps = {
  title: "History",
  handleClick: jest.fn(),
  isOpen: false,
};
describe("render HistoryTitle component", () => {
  it("should render component with props", () => {
    const wrapper = mount(<HistoryTitle {...testProps} />);

    expect(wrapper.find("span").at(0).text()).toBe(testProps.title);

    wrapper.simulate("click");

    expect(testProps.handleClick).toBeCalled();
  });
});
