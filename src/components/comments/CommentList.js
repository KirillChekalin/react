import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorator/toggleOpen';
import {connect} from 'react-redux'
import {loadAllComments} from '../../AC';
import {arrToMap, mapToArr} from '../../helpers';


class CommentList extends Component {


  componentWillReceiveProps({loading, loaded, articleId, loadAllComments, comments, commentsId}) {
    if (!articleId) return null;

    if(!loading && !loaded) loadAllComments(articleId);
  }

  render() {
    let articleComments = [];

    const {articleId, isOpen, loaded, toggleOpen, comments, commentsId} = this.props;

    if (!articleId) return null;


    if (loaded) {
      const allComments = mapToArr(comments.entities);

      commentsId.forEach(id => {
        allComments.forEach(comment => {
          if (comment.id === id) {
            articleComments.push(comment);
          }
        })
      });
    }


    if(articleComments.length === 0) return null;


    return (
      <ul  className = 'card-footer'>
        <button onClick = {toggleOpen} className = 'btn btn-primary btn-sm'>
          {isOpen ? 'Hide' : 'Show'} comments
        </button>
        {getBody({articleComments, isOpen, articleId})}
      </ul>
    )
  }
}

function getBody ({articleComments, isOpen, articleId}) {
  if (!isOpen || !articleComments) return null;

  return articleComments.map(comment => {
    if (!comment) return null
    return <li key = {comment.id}><Comment comment = {comment} /></li>
  });
}

export default connect((state) => {
  return {
    comments: state.comments
  };
}, {loadAllComments})(toggleOpen(CommentList));
