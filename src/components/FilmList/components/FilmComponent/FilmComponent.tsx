import { Film } from '../../../../models/Film';
import './FilmComponent.scss';

export function FilmComponent(props: Film) {

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
      <a className='film__people'>Show people</a>
    </div>
  );
}
