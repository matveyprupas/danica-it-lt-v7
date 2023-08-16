import React from 'react';
import './MainLayout.scss';
import { NavigationBar } from '../NavigationBar';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main">
      <header className="main__header">
        <h1>Star Wars Films explorer</h1>
      </header>
      <div className='main__content'>
        <nav>
          <NavigationBar />
        </nav>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
