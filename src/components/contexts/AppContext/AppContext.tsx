import { createContext, useReducer } from 'react';
import initialAppContext from './initialAppContext';

export interface IAppStateContext {
  page: 'FILMS' | 'ABOUT'
}

export interface IAppActionContext {
  type: 'CHANGE_PAGE',
  appState: IAppStateContext
}

interface IAppContext {
  appState: IAppStateContext,
  appDispatch: React.Dispatch<IAppActionContext>,
};

interface IAppContextComponentProps {
  children: JSX.Element
}

function appReducer(appState: IAppStateContext, action: IAppActionContext) {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      return ( action.appState.page !== appState.page ? {
        ...appState,
        page: action.appState.page
      } : appState);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export const AppContext = createContext<IAppContext>({
  appState: initialAppContext,
  appDispatch: () => {},
});

export function AppContextProvider({ children }: IAppContextComponentProps) {

  const [appState, appDispatch] = useReducer(
    appReducer,
    initialAppContext
  );

  return (
    <AppContext.Provider value={{
      appState,
      appDispatch
      }}>
        {children}      
    </AppContext.Provider>
  );
}
