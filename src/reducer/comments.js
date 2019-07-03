import {LOAD_ALL_COMMENTS, ADD_COMMENT, SUCCESS, START} from '../constans'
import {OrderedMap, Record, Map} from 'immutable';
import {arrToMap} from '../helpers';

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
});

const ReducerState = Record({
  entities: new OrderedMap({})
});

const defaultState = new ReducerState({});

export default (commentsState = defaultState, action) => {
  const {type, payload, randomId, response} = action;
  switch (type) {
    case ADD_COMMENT:
      return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));

    case LOAD_ALL_COMMENTS + SUCCESS:
      return commentsState
        .update('entities', entities => entities.merge(arrToMap(response, CommentRecord)));
  }
  return commentsState;
}
