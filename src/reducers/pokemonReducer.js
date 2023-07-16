//import { createStore } from 'redux';

//const pokemonReducer = (state, action) => {
const pokemonReducer = (
  state = { filter: "", pokemon: [], selectedItem: null },
  action
) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      // throw new Error("Your action is bad and you should feel bad."); <- Use in vanilla react
      return state; // <- Redux compatability
  }
};
export default pokemonReducer;
