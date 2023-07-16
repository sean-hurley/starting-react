import Button from "@mui/material/Button";

export default function PokemonRow({ pokemon, onSelect }) {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button variant="contained" onClick={() => onSelect(pokemon)}>
          More Info
        </Button>
      </td>
    </tr>
  );
}
