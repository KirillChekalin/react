// import {normalizedArticles as defaultArticles} from '../components/fixtures.js'
import {DELETE_ARTICLE,  ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, SUCCESS, START} from '../constans'
import {arrToMap} from '../helpers'
import {OrderedMap, Record} from 'immutable'

const ArticleRecord = Record({
  text: null,
  title: '',
  loading: false,
  id: null,
  comments: []
});

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (articleState = defaultState, action) => {
  const {type, payload, randomId, response} = action;
  switch (type) {
    case DELETE_ARTICLE:
      return articleState.deleteIn(['entities', payload.id]);
    case ADD_COMMENT:
      return articleState.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId));
    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true);
    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true);

    case LOAD_ARTICLE + START:
      return articleState.setIn(['entities', payload.id, 'loading'], true);
    case LOAD_ARTICLE + SUCCESS:
    return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response));
  }
  return articleState;
}
