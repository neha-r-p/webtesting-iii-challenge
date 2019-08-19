// Test away!
import React from 'react';
import Display from './Display';
import renderer from 'react-test-renderer';

describe("<Display />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Display />); 
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

// describe('<Display />')