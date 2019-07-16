import {ADD_COMMENT,  DELETE_ARTICLE, INCREMENT,
    CHANGE_SELECTION, CHANGE_DATE_RANGE, LOAD_ALL_ARTICLES,
    LOAD_ARTICLE, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL,
    DECREMENT, LOAD_COMMENTS, LOAD_COMMENTS_FOR_PAGE
 } from '../constans';

export function increment() {
  return {
    type: INCREMENT
  };
};

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  };
};

export function changeSelection(selected) {
  // console.log(selected);
  return {
    type: CHANGE_SELECTION,
    payload: {selected}
  };
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: {dateRange}
  };
}

export function addNewComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: 'http://localhost:3030/article'
  };
}

export function loadAllComments(articleId) {
  return {
    type: LOAD_ALL_COMMENTS,
    callAPI: 'http://localhost:3030/comment/' + articleId,
    payload: {articleId}
  };
}

export function loadComments(offset, limit) {
  return {
    type: LOAD_COMMENTS,
    callAPI: `http://localhost:3030/comment?limit=${limit}&offset=${offset}`,
    payload: {offset, limit}
  }
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: {id}
    });

    setTimeout(() => {
      fetch('http://localhost:3030/article/' + id)
        .then(res => res.json())
        .then(response => dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: {id, response}
        }))
        .catch(error => dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: {id, error}
        }))
    }, 1000)
  };
}

export function checkAndLoadCommentsForPage(page) {
  return (dispatch, getState) => {
    const {comments: {pagination}} = getState();
    if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return;

    dispatch({
      type: LOAD_COMMENTS_FOR_PAGE,
      payload: {page},
      callAPI: `http://localhost:3030/comment?limit=5&offset=${(page - 1) * 5}`
    })
  };
}

/*
export function loadArticle(id) {
  return {
    type: LOAD_ARTICLE,
    callAPI: 'http://localhost:3030/article/${id}'
  };
}
*/
