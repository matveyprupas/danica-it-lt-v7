import { useContext, useEffect } from 'react';
import './FilmList.scss';
import { FilmComponent } from './components/FilmComponent';
import { FilmsContext } from '../contexts/FilmContext';
import api from '../../api/api';

export function FilmList() {
  // const [charactersUrls, setCharactersUrls] = useState<string[]>([]);
  const {
    filmsDispatch,
    filmsState
  } = useContext(FilmsContext);

  useEffect(() => {
    api.swapiApi.getFilms()
      .then(res => {
        filmsDispatch({
          type: 'FILMS_INIT',
          filmsState: {
            ...filmsState,
            films: res.data.results
          }
        })
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  useEffect(() => {

    // console.log('useEffert with [filmsState.charactersUrls] started');
    // console.log(filmsState.charactersUrls);
    const charactersRequests = filmsState.charactersUrls.map(charUrl => {
      return api.swapiApi.getCharacter(charUrl)
    });

    Promise.all(charactersRequests)
    .then(results => results.map(res => res.data))
      .then(characters => {
        // console.log( characters );
        filmsDispatch({
          type: 'CHARACTERS_ADD',
          filmsState: {
            ...filmsState,
            characters: characters
          }
        })
      })
      .catch(err => {
        console.error(err);
      });
  }, [filmsState.charactersUrls]);

  // console.log(filmsState.charactersUrls);

  console.log('FilmList render with filmsState: ', filmsState);


  return (
    <section className="film-list">
      { !filmsState.films.length ? 
        <span>Still Loading...</span> : 
        <ul className="film-list__list">
          {filmsState.films.map(film => (
            <li className='film-list__film' key={film.title + '_' + film.director} >
              <FilmComponent {...film} />
            </li>
          ))}
        </ul>
      }
      
    </section>
  );
}
