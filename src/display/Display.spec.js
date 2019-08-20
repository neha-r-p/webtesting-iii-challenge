// Test away!
import React from "react";
import Display from "./Display";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should display 'Closed' if the 'closed' prop is true", () => {
     const { getByText } = render(<Display closed={true} />);
     expect(getByText(/closed/i)).toBeTruthy()
  })

  it("should display 'Open' if the 'closed' prop is false", () => {
    const { getByText } = render(<Display closed={false} />);
    expect(getByText(/open/i)).toBeTruthy()
 })

 it("should display 'Locked' if the 'locked' prop is true", () => {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/locked/i)).toBeTruthy()
 })

 it("should display 'Unlocked' if the 'locked' prop is false", () => {
    const { getByText } = render(<Display locked={false} />);
    expect(getByText(/unlocked/i)).toBeTruthy()
 })

  it("should use 'red-led' class when 'locked' or 'closed'", () => {
      const { getByText } = render(<Display locked={true} closed={true} />)
      expect(getByText(/locked/i)).toHaveClass('red-led');
      expect(getByText(/closed/i)).toHaveClass('red-led')
  })
});

// displays if gate is open/closed and if it is locked/unlocked
//displays 'Closed' if the 'closed' prop is true and 'Open' if otherwise
//displays 'Locked' if the 'locked' prop is 'true' and 'Unlocked' otherwise
//when 'locked' or 'closed' use the 'red-led' class
//when 'unlocked' or 'open' use the 'green-led' class