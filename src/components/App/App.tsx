import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Page404 } from '../pages/Page404';
import { AboutPage } from '../pages/AboutPage';
import { FilmsPage } from '../pages/FilmsPage';

export function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Star Wars Films explorer</h1>
      </header>
      <Routes>
        <Route path="/" element={<FilmsPage />} />
          
        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
