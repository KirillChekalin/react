import {ADD_COMMENT,  DELETE_ARTICLE, INCREMENT,
    CHANGE_SELECTION, CHANGE_DATE_RANGE, LOAD_ALL_ARTICLES
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
