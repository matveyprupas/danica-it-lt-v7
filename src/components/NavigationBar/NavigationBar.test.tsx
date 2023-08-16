import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavigationBar } from './NavigationBar';
import { BrowserRouter } from 'react-router-dom';

test('renders NavigationBar', () => {
  render(
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Navigation/i);
  expect(linkElement).toBeInTheDocument();
});
