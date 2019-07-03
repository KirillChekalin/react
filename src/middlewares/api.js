import {START, SUCCESS, FAIL} from '../constans'

export default store => next => action => {
  const {callAPI, type, ...rest} = action;
  if (!callAPI) return next(action);

  next({
    ...rest, type: type + START
  })

  fetch(callAPI, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(res => res.json())
    .then(response => {
      return next({...rest, type: type + SUCCESS, response});
    })
    .catch(err => next({...rest, type: type + FAIL, err}))
}
