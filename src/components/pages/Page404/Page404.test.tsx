import React from 'react';
import { render, screen } from '@testing-library/react';
import { Page404 } from './Page404';

test('renders Page404', () => {
  render(<Page404 />);
  const linkElement = screen.getByText(/Page not found/i);
  expect(linkElement).toBeInTheDocument();
});
