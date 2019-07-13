import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE } from "../actions/types";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Wake up Early",
      completed: false
    },
    {
      id: 2,
      title: "Do exercises",
      completed: false
    },
    {
      id: 3,
      title: "Have Breakfast",
      completed: false
    },
    {
      id: 4,
      title: "Have a fun and productive day",
      completed: false
    }
  ],
  note: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return state
    case ADD_NOTE:
      return {
        ...state,
        notes: action.payload,
      };
    case DELETE_NOTE:
        return {
          ...state,
          notes: action.payload,
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
