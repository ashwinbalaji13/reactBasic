import { FETCH_NOTES, ADD_NOTE, UPDATE_NOTE } from "../actions/types";

const initialState = {
  notes: [],
  note: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTES:
      console.log("fetch notes reducer", action);
      return {
        ...state,
        notes: action.payload
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        note: action.payload
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: action.payload,
        note: []
      };
    default:
      return state;
  }
}
