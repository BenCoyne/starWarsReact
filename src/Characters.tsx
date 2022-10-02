import { Character, CharacterList } from './CharacterList';
import { useQuery } from 'react-query';

const Characters = (): JSX.Element => {

  const { isLoading, data, error } = useQuery<Character>(["getJedi"], () => {
    return fetch("https://swapi.dev/api/people/1").then(res => res.json())
  });

  if (isLoading) {
    return <div>LOADING...</div>
  }

  if (error) {
    throw new Error('no character found!')
  }

  const jedi = data ? [data] : []

  return (
    <div>
      <CharacterList people={jedi} />
    </div>
  );
}

export default Characters;
