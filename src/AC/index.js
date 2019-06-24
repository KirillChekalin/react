import {ADD_COMMENT,  DELETE_ARTICLE, INCREMENT,
    CHANGE_SELECTION, CHANGE_DATE_RANGE, LOAD_ALL_ARTICLES,
    LOAD_ARTICLE, START, SUCCESS, FAIL
 } from '../constans';

export function increment() {
  return {
    type: INCREMENT
  };
};

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

/*
export function loadArticle(id) {
  return {
    type: LOAD_ARTICLE,
    callAPI: 'http://localhost:3030/article/${id}'
  };
}
*/
