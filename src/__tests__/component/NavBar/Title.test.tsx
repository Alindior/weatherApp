import React from "react";
import { mount } from "enzyme";

import { Title } from "../../../components/NavBar/Title";

describe("display Title component", () => {
  it("display Title width text", () => {
    const testTitle = "HelloWorld";
    const wrapper = mount(<Title text={testTitle} />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find("h6").text()).toBe(testTitle);
  });
});
