import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('the Dashboard component', () => {

  it('should render without crashing', () => {
    render(<Dashboard />);
  })
})