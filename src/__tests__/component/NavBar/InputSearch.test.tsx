import React from "react";
import { mount } from "enzyme";

import { InputSearch } from "../../../components/NavBar/InputSearch";

describe("", () => {
  const onSearch = jest.fn();
  const wrapper = mount(<InputSearch onSearch={onSearch} />);

  it("should call onSearch with entered city", () => {
    const testValue = "valera@mail.ru";
    expect(wrapper.find("input[name='city']")).toHaveLength(1);
    expect(wrapper.find("input[name='city']").props().value).toBe("");

    wrapper.find('input[name="city"]').simulate("change", {
      target: { name: "city", value: testValue },
    });
    expect(wrapper.find("input[name='city']").props().value).toBe(testValue);

    wrapper.find("input[type='text']").simulate("keypress", { key: "Enter" });
    expect(onSearch).toHaveBeenCalled();                      
    expect(onSearch).toHaveBeenCalledWith(testValue);
  });});
