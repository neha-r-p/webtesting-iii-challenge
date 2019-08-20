
import React from 'react';
import Controls from './Controls';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
// import '@testing-library/react/cleanup-after-each';

describe("<Controls />", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Controls />); 
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it("should provide buttons to toggle closed and locked states", () => {
        render(<Controls />)
        const toggleButtons = document.querySelectorAll('.toggle-btn')
        expect(toggleButtons.length).toEqual(2)
    })
  });

// describe("lock and unlock gate")

//toggle closed and locked states
//button's text changes to reflect state
//closed toggle button is disabled if gate is locked
//the locked toggle button is disabled if gate is open