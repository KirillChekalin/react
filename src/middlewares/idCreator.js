// import {ADD_NEW_COMMENT} from '../constans';
//
// function generateId() {
//   let min = 1000000,
//       max = 9000000;
//   return Math.floor(Math.random() * (max - min)) + min;
// }

export default store => next => action => {
// console.log(action);
  // if (action.type === ADD_NEW_COMMENT) {
  //
  //   store.dispatch({
  //     type: 'ADD_COMMENT',
  //     payload: {
  //       articleId: action.payload.articleId,
  //       commentId: action.payload.comment.id,
  //     },
  //     generateId: true
  //   })
  //
  // }
  next(action);
}
