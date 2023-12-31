import { useContext } from 'react';
import { Film } from '../../../../models/Film';
import { FilmsContext } from '../../../contexts/FilmContext';
import './FilmComponent.scss';

export function FilmComponent(props: Film) {

  const {
    filmsDispatch,
    filmsState
  } = useContext(FilmsContext);

  const handleChangeFilmID = (id: string) => {

    const charsUrls = filmsState.films.filter(film => film.episode_id.toString() === id)[0].characters;

    filmsDispatch({
      type: 'CHANGE_FILM_ID',
      filmsState: {
        ...filmsState,
        filmId: id,
        characters: [],
        charactersUrls: [...charsUrls as string[]]
      }
    });
  }

  return (
    <div className="film">
      <div className='film__info'>
        <div className='film__description'>
          <h3 className='film__title'>{props.title}</h3>
          <span>Release date: {props.release_date}</span>
        </div>
        <span className='film__id'>
          {props.episode_id}
        </span>
      </div>
      <button 
        className='film__characters' 
        onClick={
          () => handleChangeFilmID(props.episode_id.toString())
        }
      >
        Show characters
      </button>
    </div>
  );
}
