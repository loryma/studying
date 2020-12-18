import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';
import '@testing-library/jest-dom/extend-expect';

test('renders button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/button/i);
  expect(buttonElement).toBeInTheDocument();
})