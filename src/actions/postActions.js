import { FETCH_NOTES, ADD_NOTE } from "./types";

export const fetchNotes = () => dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(posts => {
  //       console.log("posts", posts);
  //       return dispatch({
  //         type: FETCH_POSTS,
  //         payload: posts
  //       });
  //     });

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
