import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge, union } from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  // let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};