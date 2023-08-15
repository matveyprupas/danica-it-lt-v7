import { createContext, useReducer } from 'react';
import initialFilmContext from './initialFilmContext';
import { Character } from '../../../models/Character';
import { Film } from '../../../models/Film';

export interface IFilmsStateContext {
  filmId: string,
  films: Film[],
  characters: Character[],
  charactersUrls: string[]
}

export interface IFilmsActionContext {
  type: 'CHANGE_FILM_ID' | 'FILMS_INIT' | 'CHARACTERS_ADD',
  filmsState: IFilmsStateContext
}

interface IFilmsContext {
  filmsState: IFilmsStateContext,
  filmsDispatch: React.Dispatch<IFilmsActionContext>,
};

interface IFilmsContextComponentProps {
  children: JSX.Element
}

function filmsReducer(filmsState: IFilmsStateContext, action: IFilmsActionContext) {
  switch (action.type) {
    case 'CHANGE_FILM_ID': {
      return ({
        ...filmsState,
        filmId: action.filmsState.filmId,
        characters: [...action.filmsState.characters],
        charactersUrls: [...action.filmsState.charactersUrls]

      });
    }
    case 'FILMS_INIT': {
      return ({
        ...filmsState,
        films: [...action.filmsState.films]
      });
    }
    case 'CHARACTERS_ADD': {
      return ({
        ...filmsState,
        characters: [...action.filmsState.characters]
      });
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const FilmsContext = createContext<IFilmsContext>({
  filmsState: initialFilmContext,
  filmsDispatch: () => {},
});

export function FilmsContextProvider({ children }: IFilmsContextComponentProps) {

  const [films, filmsDispatch] = useReducer(
    filmsReducer,
    initialFilmContext
  );

  return (
    <FilmsContext.Provider value={{
      filmsState: films,
      filmsDispatch
      }}>
        {children}      
    </FilmsContext.Provider>
  );
}
