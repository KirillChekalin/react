// import {normalizedArticles as defaultArticles} from '../components/fixtures.js'
import {DELETE_ARTICLE,  ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constans'
import {arrToMap} from '../helpers'
import {Map, Record} from 'immutable'

const ArticleRecord = Record({
  text: null,
  title: '',
  id: null,
  comments: []
})
const defaultState = new Map({});

export default (articleState = defaultState, action) => {
  const {type, payload, randomId, response} = action;
  switch (type) {
    case DELETE_ARTICLE: {
      const tmpState = {...articleState}
      delete tmpState[payload.id];
      return tmpState;
    }
    case ADD_COMMENT: {
      const article = articleState[payload.articleId];
      return {
        ...articleState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      };
    }
    case LOAD_ALL_ARTICLES :
      return arrToMap(response, ArticleRecord);
  }
  return articleState;
}
