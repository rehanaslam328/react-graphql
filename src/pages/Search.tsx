import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
  query getCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables: { name },
  });

  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={()=> getLocations()}>Search</button>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {called && data && (
            <ul>
                {data.characters.results.map((character: any) => (
                <div key={character.id}>
                    <li>{character.location.name}</li>
                </div>
                ))}
            </ul>
            )}
      </div>
    </>
  );
};

export default Search;
