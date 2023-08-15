import { useContext } from 'react';
import './CharactersInFilm.scss';
import { FilmsContext } from '../contexts/FilmContext';
// import { useCharacter } from '../../queries/characters';
import { CharacterComponent } from './components/Character';

export function CharactersInFilm() {
  const {
    filmsState: {
      filmId,
      characters
    },
  } = useContext(FilmsContext);

  // const {data, isLoading} = useCharacter(filmId as string)

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
