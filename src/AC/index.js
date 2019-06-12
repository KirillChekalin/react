import {DELETE_ARTICLE, INCREMENT, FILTER_ARTICLE, CHANGE_SELECTION} from '../constans';

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
