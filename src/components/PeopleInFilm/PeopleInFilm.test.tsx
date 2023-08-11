import React from 'react';
import { render, screen } from '@testing-library/react';
import { PeopleInFilm } from './PeopleInFilm';

test('renders learn react link', () => {
  render(<PeopleInFilm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
