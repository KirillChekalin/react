import {LOAD_ALL_COMMENTS, ADD_COMMENT, LOAD_COMMENTS, LOAD_COMMENTS_FOR_PAGE, SUCCESS, START} from '../constans'
import {OrderedMap, Map, Record} from 'immutable';
import {arrToMap} from '../helpers';

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
});

const ReducerState = Record({
  total: null,
  pagination: new Map({}),
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

    case LOAD_COMMENTS + SUCCESS:
    return commentsState
      .update('entities', entities => entities.merge(arrToMap(response.records, CommentRecord)));

    case LOAD_COMMENTS_FOR_PAGE + START:
      return commentsState
        .setIn(['pagination', payload.page, 'loading'], true);

    case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
          return commentsState
          .set('total', response.total)
          .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
          .setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
          .setIn(['pagination', payload.page, 'loading'], false);

  }
  return commentsState;
}
