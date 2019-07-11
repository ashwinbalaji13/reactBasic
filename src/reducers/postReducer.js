import { FETCH_NOTES, ADD_NOTE } from "../actions/types";

const initialState = {
  notes: [],
  note: {}
};

export default function(state = initialState, action) {
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
        notes: action.notes,
        note: action.note
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
