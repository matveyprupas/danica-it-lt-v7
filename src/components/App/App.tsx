import { Route, Routes } from 'react-router-dom';
import { Page404 } from '../pages/Page404';
import { AboutPage } from '../pages/AboutPage';
import { FilmsPage } from '../pages/FilmsPage';
import { MainLayout } from '../MainLayout';

export function App() {

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
