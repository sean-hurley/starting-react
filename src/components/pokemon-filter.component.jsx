import Cancel from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { useDispatch, useSelector } from "react-redux";

const PokemonFilter = () => {
  // const {
  //   state: { filter },
  //   dispatch,
  // } = useContext(PokemonContext);

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <Input
      type="text"
      fullWidth
      placeholder="Search"
      onChange={(evt) => {
        dispatch({ type: "SET_FILTER", payload: evt.target.value });
      }}
      endAdornment={
        <InputAdornment position="end">
          {filter && (
            <IconButton
              onClick={() => {
                //setFilter("");
                dispatch({ type: "SET_FILTER", payload: "" });
              }}
            >
              <Cancel />
            </IconButton>
          )}
        </InputAdornment>
      }
      value={filter}
    />
  );
};
export default PokemonFilter;
