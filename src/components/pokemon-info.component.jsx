import { useSelector } from "react-redux";

export default function PokemonInfo() {
  const selectedItem = useSelector((state) => state.selectedItem);

  // const {
  //   state: { selectedItem },
  // } = useContext(PokemonContext);

  // const {
  //   name: { english },
  //   base,
  // } = selectedItem;

  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>

      <table style={{ width: "100%" }}>
        <tbody>
          {Object.keys(selectedItem.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}
