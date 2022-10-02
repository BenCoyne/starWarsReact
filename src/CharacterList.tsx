import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useQuery, useQueries } from 'react-query';

export interface Character {
  name: string,
  vehicles: string[]

}

interface Vehicle {
  name: string,
  model: string
}


const ListItem = ({ person }: { person: Character }): JSX.Element => {

  // const [vehicles, setVehicles] = useState<Vehicle[]>([])

  // const getData = async (url: string) => {
  //   const { data } = await axios.get(url);
  //   return data;
  // }

  // useEffect(() => {
  //   const vehicleData = person.vehicles.map(x => getData(x))
  //   console.log(vehicleData)
  //   Promise.all(vehicleData).then(x => setVehicles(x))
  // }, [])

  const query = (vehicleUrl: string) => {
    return fetch(vehicleUrl).then(res => res.json())
  }

  const { isLoading, error, data } = useQuery(["getVehicle", vehicleUrl], () => query(vehicleUrl))

  // console.log({ isLoading, data })

  const queries = person.vehicles.map((v, i) => {
    return {
      queryKey: ["vehicle", i + 1],
      queryFn: () => {
        fetch(v).then(res => res.json())
      }
    }
  })

  const { isLoading, error, data } = useQueries({
    queries: queries
  })

  return (
    <li>
      <div>
        <p>{person.name}</p>
        {/* {!pervehicles.length ? <p>LOADING VEHICLES...</p> :
          <ul>
            {vehicles.map(v => {
              return <li>{v.name} | {v.model}</li>
            })}
          </ul>
        } */}
      </div>
    </li>)
}

export const CharacterList = ({ people }: { people: Character[] }): JSX.Element | null => {
  if (!people.length) return null

  return <ul>
    {people.map(p => {
      return <ListItem person={p} />
    })}</ul>

}


