import { useContext } from 'react';
import './CharactersInFilm.scss';
import { FilmsContext } from '../contexts/FilmContext';
import { CharacterComponent } from './components/Character';

export function CharactersInFilm() {
  const {
    filmsState: {
      filmId,
      characters
    },
  } = useContext(FilmsContext);

  return (
    <div className="characters">
      {!filmId ? 
        'Please choose film' : 
        !characters.length ? 
        'Loading...' : null
      }
      {characters.map((char, index) => (
        <CharacterComponent character={{...char}} key={`${char.name}_${char.birth_year}`}  id={index + 1} />
      ))}
      
    </div>
  );
}
