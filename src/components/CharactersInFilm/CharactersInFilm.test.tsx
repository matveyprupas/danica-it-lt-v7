import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharactersInFilm } from './CharactersInFilm';

test('renders learn react link', () => {
  render(<CharactersInFilm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
