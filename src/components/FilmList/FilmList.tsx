import { useFilms } from '../../queries/films';
import './FilmList.scss';
import { FilmComponent } from './components/FilmComponent';

export function FilmList() {
  const { data, isLoading } = useFilms();

  return (
    <div className="film-list">
      { isLoading ? 
        <span>Still Loading...</span> : 
        <ul className="film-list__list">
          {data?.results.map(film => (
            <li className='film-list__film' key={film.title + '_' + film.director} >
              <FilmComponent {...film} />
            </li>
          ))}
        </ul>
        
      }
      
    </div>
  );
}
