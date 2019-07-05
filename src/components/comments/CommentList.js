import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorator/toggleOpen';
import {connect} from 'react-redux'
import {loadAllComments} from '../../AC';
import {arrToMap, mapToArr} from '../../helpers';
import {commentSelectorFactory} from '../../selectors'


class CommentList extends Component {


  componentWillReceiveProps({loadAllComments, article, isOpen}) {
    if (!this.props.isOpen && isOpen && !article.commentsIsLoading && !article.commentsIsLoaded) {
        loadAllComments(article.id)
      }
  }

  render() {
    const {isOpen, article, toggleOpen} = this.props;
    const text = isOpen ? 'hide comments' : 'show comments';

    return (
      <ul  className = 'card-footer'>
        <button onClick = {toggleOpen} className = 'btn btn-primary btn-sm'>
          {text}
        </button>
        {getBody({article, isOpen})}
      </ul>
    )
  }
}

function getBody ({article: {comments = [], id, commentsIsLoading, commentsIsLoaded}, isOpen}) {
  if (!isOpen || !commentsIsLoaded) return null;

  if(!comments.length) return (
      <div>
        <p>No comments yet</p>
      </div>
  );

  return comments.map(id => {
    if (!id) return null;
    return <li key = {id}><Comment id = {id} /></li>
  });
}

export default connect(null, {loadAllComments})(toggleOpen(CommentList));
