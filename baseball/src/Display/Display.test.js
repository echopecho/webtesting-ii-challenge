import React from 'react'
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('the Display component', () => {
   
  it('should render without crashing', () => {
    const count = {
      strike: 0
    }
    render(<Display count={count} />);
  });
});