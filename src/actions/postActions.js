import { FETCH_NOTES, ADD_NOTE } from "./types";

export const fetchNotes = () => dispatch => {
  return dispatch({
    type: FETCH_NOTES,
    payload: [
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
    ]
  });
};

export const addNotes = (notes, note) => dispatch => {
  // notes.push(note);
  // console.log("notes", notes);

  // note = {};
  return dispatch({ type: ADD_NOTE, notes, note });
};

// export const updateNotes = (notes, note) => dispatch => {
//   // notes.push(note);
//   // note = {};
//   return dispatch({ type: UPDATE_NOTE, payload: notes, note: {} });
// };

export const deleteNotes = (notes, id) => dispatch => {
  let updatedNotes = notes.filter(function(obj) {
    return obj.id !== id;
  });
  return dispatch({ type: FETCH_NOTES, payload: updatedNotes });
};
