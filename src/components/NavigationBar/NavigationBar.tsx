import { useContext } from 'react';
import './NavigationBar.scss';
import { Link } from 'react-router-dom';
import { AppContext, IAppStateContext } from '../contexts/AppContext';

export function NavigationBar() {

  const {
    appState: {
      page
    },
    appDispatch
  } = useContext(AppContext);

  const handleChangePage = (page: IAppStateContext['page']) => {
    appDispatch({
      type: 'CHANGE_PAGE',
      appState: {
        page: page
      }
    })
  }
  return (
    <div className="nav-bar">
      <h2 className='nav-bar__header'>
        Navigation: 
      </h2>
      <section className='nav-bar__links'>
        <Link 
          className={page === 'ABOUT' ? 'nav-bar__link_choosed' : ''} 
          to={'/about'}
          onClick={() => handleChangePage('ABOUT')}
          >
            About
        </Link>
        <Link 
          className={page === 'FILMS' ? 'nav-bar__link_choosed' : ''} 
          to={'/'}
          onClick={() => handleChangePage('FILMS')}
          >
            Films
        </Link>
        {/* <Link to={'/'}>Films</Link> */}
      </section>
    </div>
  );
}
