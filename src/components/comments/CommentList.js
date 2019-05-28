import React from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorator/toggleOpen';

function CommentList ({comments, isOpen, toggleOpen}){
  // static propTypes = {
  //   comments: PropTypes.array.isRequired
  // }

    if(!comments) return null;

    return (
      <ul  className = 'card-footer'>
        <button onClick = {toggleOpen} className = 'btn btn-primary btn-sm'>
          {isOpen ? 'Hide' : 'Show'} comments
        </button>
        {getBody({comments, isOpen})}
      </ul>
    )



}

function getBody ({comments, isOpen}) {
  if (!isOpen) return null

  if (!comments) return null
  const commentElements = comments.map(comment => {
    if (!comment) return null
    return <li key = {comment.id}><Comment comment = {comment} /></li>
  })
  return commentElements
}

export default toggleOpen(CommentList);