// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';

describe("<Dashboard />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Dashboard />); 
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it("renders controls and display without crashing", () => {
        render(<Dashboard />)
    })
  });
