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
      <span className='character__id'>{id}</span>
      <span className='character__name'>Name: {character.name}</span>
      <span className='character__birth'>Birth Year: {character.birth_year}</span>
      <span className='character__gender'>Gender: {character.gender}</span>
      <span className='character__mass'>Mass: {character.mass}, kg</span>
    </div>
  );
}
