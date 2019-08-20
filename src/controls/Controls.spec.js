import React from "react";
import Controls from "./Controls";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should provide buttons to toggle closed and locked states", () => {
    render(<Controls />);
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    expect(toggleButtons.length).toEqual(2);
  });

  it("should display buttons for unlock gate and open gate if state is locked and closed", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);
    expect(getByText(/unlock gate/i));
    expect(getByText(/open gate/i));
  });

  it("should display buttons for lock gate and open gate if state is unlocked and closed", () => {
    const { getByText } = render(<Controls locked={false} closed={true} />);
    expect(getByText(/lock gate/i));
    expect(getByText(/open gate/i));
  })
});

//button's text changes to reflect state
//closed toggle button is disabled if gate is locked
//the locked toggle button is disabled if gate is open
