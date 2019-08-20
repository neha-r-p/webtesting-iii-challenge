// Test away!
import React from "react";
import Display from "./Display";
import renderer from "react-test-renderer";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

// displays if gate is open/closed and if it is locked/unlocked
//displays 'Closed' if the 'closed' prop is true and 'Open' if otherwise
//displays 'Locked' if the 'locked' prop is 'true' and 'Unlocked' otherwise
//when 'locked' or 'closed' use the 'red-led' class
//when 'unlocked' or 'open' use the 'green-led' class