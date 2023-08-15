// import { useState } from 'react';
import { FilmList } from '../../FilmList';
import './FilmsPage.scss';
// import { FilmsContextProvider } from '../../contexts/FilmContext';
import { CharactersInFilm } from '../../CharactersInFilm';

export function FilmsPage() {
  // const [filmId, setFilmId] = useState('');

  return (
    <>
      {/* <FilmsContextProvider> */}
        <>
          <FilmList />
          <CharactersInFilm />
        </>
      {/* </FilmsContextProvider> */}
    </>
  );
}
