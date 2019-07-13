import { FETCH_NOTES, ADD_NOTE } from "../actions/types";

const initialState = {
  notes: [],
  note: {}
};

export default function(state = initialState, action) {
  console.log("reducer", state);

  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        notes: action.payload,
        note: {}
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.note],
        note: {}
      };
    // case UPDATE_NOTE:
    //   return {
    //     ...state,
    //     notes: action.payload,
    //     note: {}
    //   };
    default:
      return state;
  }
}
