import React, { useState, useEffect } from 'react';
import { CharacterList, Character } from './CharacterList';
import axios from "axios"
import { useQuery } from 'react-query';

const Characters = (): JSX.Element | null => {

  // const [jedi, setJedi] = useState<Character[]>([])


  // const getData = async () => {
  //   const { data } = await axios.get("https://swapi.dev/api/people/1");
  //   setJedi([data]);
  // }

  // useEffect(() => {
  //   if (!jedi.length) {
  //     getData()
  //   } else {
  //     console.log("We have a fucking jedi!")
  //   }

  // }, [])

  const { isLoading, error, data } = useQuery(["getJedi"], () => {
    return fetch("https://swapi.dev/api/people/1").then(res => res.json())
  });

  const jedi = [data] || []

  console.log({ isLoading, jedi })

  if (isLoading) {
    return <div>LOADING...</div>
  }

  return (
    <div>
      <CharacterList people={jedi} />
    </div>
  );


}

export default Characters;
