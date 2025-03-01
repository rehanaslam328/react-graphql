import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharactersList = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="CharacterList">
        {data.characters.results.map((character: any) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default CharactersList;
