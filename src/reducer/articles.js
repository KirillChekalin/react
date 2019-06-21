import {normalizedArticles as defaultArticles} from '../components/fixtures.js'
import {DELETE_ARTICLE,  ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constans'
// import {arrToMap} from '../helpers'


function arrToMap (obj) {
  return  obj.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
  },{});
}

export default (articleState = {}, action) => {
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
      return arrToMap(response);
  }
  return articleState;
}
