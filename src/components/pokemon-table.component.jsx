//import PokemonContext from "../context/PokemonContext";
import { useDispatch, useSelector } from "react-redux";
import PokemonRow from "./pokemon-row.component";
const PokemonTable = () => {
  //const { pokemon, filter, setSelectedItem } = useContext(PokemonContext);
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const filter = useSelector((state) => state.filter);

  // const {
  //   state: { pokemon, filter },
  //   dispatch,
  // } = useContext(PokemonContext);
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((p) =>
            p.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onSelect={(p) =>
                dispatch({ type: "SET_SELECTED_ITEM", payload: p })
              }
            />
          ))}
      </tbody>
    </table>
  );
};
export default PokemonTable;
