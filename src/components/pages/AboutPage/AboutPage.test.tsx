import React from 'react';
import { render, screen } from '@testing-library/react';
import { AboutPage } from './AboutPage';

test('renders AboutPage', () => {
  render(<AboutPage />);
  const linkElement = screen.getByText(/The Star Wars API/i);
  expect(linkElement).toBeInTheDocument();
});
