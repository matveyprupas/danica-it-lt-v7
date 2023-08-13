import React from 'react';
import { render, screen } from '@testing-library/react';
import { FilmsPage } from './FilmsPage';

test('renders learn react link', () => {
  render(<FilmsPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
