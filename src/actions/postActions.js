import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE } from "./types";

export const fetchNotes = () => dispatch => {
  return dispatch({
    type: FETCH_NOTES
  });
};

export const addNotes = (notes, note) => dispatch => {
  let payload = [...notes] 
  payload.push(note)
  return dispatch({ type: ADD_NOTE, payload });
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
  return dispatch({ type: DELETE_NOTE, payload: updatedNotes });
};
