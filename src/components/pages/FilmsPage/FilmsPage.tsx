import { FilmList } from '../../FilmList';
import './FilmsPage.scss';
import { CharactersInFilm } from '../../CharactersInFilm';

export function FilmsPage() {

  return (
    <>
      <FilmList />
      <CharactersInFilm />
    </>
  );
}
