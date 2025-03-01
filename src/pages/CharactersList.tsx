import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";


const CharactersList = () => {
  const { loading, error, data } = useCharacters();

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
