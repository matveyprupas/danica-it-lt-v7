import { Character } from '../../../../models/Character';
import './Character.scss';

type CharacterComponentProps = {
  id: number,
  character: Character
}

export function CharacterComponent({
  id,
  character
}: CharacterComponentProps) {
  return (
    <div className={`character ${id % 2 ? '' : 'character_odd'}`}>
      <span>{id}</span>
      <span className='character__name'>Name: {character.name}</span>
      <span>Birth Year: {character.birth_year}</span>
      <span>Gender: {character.gender}</span>
      <span>Mass: {character.mass}, kg</span>
    </div>
  );
}
