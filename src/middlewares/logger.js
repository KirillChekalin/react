export default store => next => action => {
  // console.log(action.type);
  console.log(action);

  next(action);
  // console.log('---','store after', store.getState());

}
