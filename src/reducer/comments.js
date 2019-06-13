import {normalizedComments as defaultComments} from '../components/fixtures.js'
import {DELETE_ARTICLE, FILTER_ARTICLE} from '../constans'


export default (commentsState = defaultComments, action) => {
  const {type, payload} = action;
  switch (type) {
  }
  return commentsState;
}
