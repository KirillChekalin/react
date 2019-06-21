export default store => next => action => {
  if (!action.generateId) return next(action);
  console.log(action);

  next({
    ...action,
    randomId: (Date.now() + Math.random()).toString()
  })
}
