import {normalizedComments as defaultComments} from '../components/fixtures.js'
import {ADD_COMMENT} from '../constans'

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc;
}, {});

export default (commentsState = commentsMap, action) => {
  const {type, payload, randomId} = action;
  switch (type) {
    case ADD_COMMENT: {
      return {...commentsState, [randomId]: payload.comment};
    }
  }
  return commentsState;
}
