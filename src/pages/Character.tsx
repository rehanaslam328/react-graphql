import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

const Character = () => {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(Number(id));
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="Character">
        <img
          src={data.character.image}
          alt={data.character.name}
          width={750}
          height={750}
        />
        <div className="Character-content">
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div className="Character-episode">
            {data.character.episode.map((episode: any) => (
              <div key={episode.id}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
