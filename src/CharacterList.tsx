import { useQueries } from 'react-query';

export interface Character {
  name: string,
  vehicles: string[]

}

interface Vehicle {
  name: string,
  model: string
}


const ListItem = ({ person }: { person: Character }): JSX.Element => {

  const vehicleData = useQueries<Vehicle[]>(
    person.vehicles.map((v, i) => {
      return {
        queryKey: ["vehicle", i + 1],
        queryFn: () => {
          return fetch(v).then(res => res.json())
        }
      }
    })
  )

  const loading = vehicleData.some(v => v.isLoading)
  const vehicles = vehicleData.map<Vehicle>(v => v.data as Vehicle).filter(v => v)

  return (
    <li>
      <div>
        <p>{person.name}</p>
        {loading ? <p>LOADING VEHICLES...</p> :
          <ul>
            {vehicles.map(v => {
              return <li>{v.name} | {v.model}</li>
            })}
          </ul>
        }
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


