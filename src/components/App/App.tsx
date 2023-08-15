import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Page404 } from '../pages/Page404';
import { AboutPage } from '../pages/AboutPage';
import { FilmsPage } from '../pages/FilmsPage';
import { MainLayout } from '../MainLayout';
import { useContext } from 'react';
import { FilmsContext } from '../contexts/FilmContext';

export function App() {
  const {
    filmsState
  } = useContext(FilmsContext);

  console.log('App render with filmsState: ', filmsState);

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<FilmsPage />} />
            
          <Route path="/about" element={<AboutPage />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </MainLayout>
    </>
  );
}
