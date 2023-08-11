import React from 'react';
import { render, screen } from '@testing-library/react';
import { FilmList } from './FilmList';

test('renders learn react link', () => {
  render(<FilmList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
