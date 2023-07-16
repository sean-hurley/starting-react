import styled from "@emotion/styled";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "./App.css";
import PokemonFilter from "./components/pokemon-filter.component";
import PokemonInfo from "./components/pokemon-info.component";
import PokemonTable from "./components/pokemon-table.component";
import pokemonReducer from "./reducers/pokemonReducer";

const store = createStore(pokemonReducer);

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1rem;
`;
const Container = styled.div`
  margin: auto;
  padding-top: 1rem;
  width: 800px;
`;

function App() {
  // const [state, dispatch] = useReducer(pokemonReducer, {
  //   pokemon: [],
  //   filter: "",
  //   selectedItem: null,
  // });

  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  // Run this in response to a change. An empty array as the 2nd param
  // causes it to run once, on page load, then not again.
  useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((response) => response.json())
      //.then((data) => setPokemon(data));
      .then((data) => dispatch({ type: "SET_POKEMON", payload: data }));
  }, [dispatch]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    // <PokemonContext.Provider
    //   value={{
    //     state,
    //     dispatch,
    //   }}
    // >
    <Container>
      <Title>Pokemon Search</Title>

      <TwoColumnLayout>
        <div>
          <PokemonFilter />

          <PokemonTable />
        </div>

        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
    // </PokemonContext.Provider>
  );
}

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default Application;
