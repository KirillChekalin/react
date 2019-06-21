export default store => next => action => {
  const {callAPI} = action;
  if (!callAPI) return next(action);

  fetch(callAPI, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
    .then(res => res.json())
    .then(response => {
      return next({...action, response});
    })
    .catch(err => console.log('---error', err))
}
