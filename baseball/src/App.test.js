import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('the App component', () => {

  it('should render without crashing', () => {
    render(<App />);
  });

  it('should display two components', () => {
    const { getByText } = render(<App />);
    getByText(/display/i);
    getByText(/dashboard/i);
  })
});