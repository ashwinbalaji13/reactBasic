import { FETCH_NOTES, ADD_NOTE } from "../actions/types";

const initialState = {
  notes: [],
  note: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTES:
      console.log("reducer", action);
      return {
        ...state,
        notes: action.payload
      };
    case ADD_NOTE:
      return {
        ...state,
        note: action.payload
      };
    default:
      return state;
  }
}
