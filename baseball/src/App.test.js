import React from 'react';
import { render, fireEvent } from 'react-testing-library';
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
  });

  it('should display strike count on button click', () => {
    const { getByText } = render(<App />);
    const button = getByText(/strike\b/i);
    fireEvent.click(button);
    getByText(/strikes: 1/i)
  });

  it('should display ball count on button click', () => {
    const { getByText } = render(<App />);
    const button = getByText(/ball\b/i);
    fireEvent.click(button);
    getByText(/balls: 1/i)
  });

  it('should reset strike count after three strikes', () => {
    const { getByText } = render(<App />);
    const button = getByText(/strike\b/i);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText(/strikes: 0/i);
  });
});