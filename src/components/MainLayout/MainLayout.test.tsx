import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainLayout } from './MainLayout';
import { BrowserRouter } from 'react-router-dom';

test('renders MainLayout', () => {
  render(
    <BrowserRouter>
      <MainLayout>
        <span>Hello</span>
      </MainLayout>
    </BrowserRouter>
  );
  const linkElement = screen.getByText('Star Wars Films explorer');
  expect(linkElement).toBeInTheDocument();
});
