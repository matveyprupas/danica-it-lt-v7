import './App.scss';
import { FilmList } from '../FilmList';
import { PeopleInFilm } from '../PeopleInFilm';
import { NavigationBar } from '../NavigationBar';

export function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Star Wars Films explorer</h1>
      </header>
      <FilmList />
      <PeopleInFilm />
      <NavigationBar />
    </div>
  );
}