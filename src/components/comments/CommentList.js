import React from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorator/toggleOpen';

function CommentList (props){
  const {comments, isOpen, toggleOpen} = props;
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

  const commentElements = comments.map(id => {
    if (!id) return null
    return <li key = {id}><Comment id = {id} /></li>
  })
  return commentElements
}

export default toggleOpen(CommentList);
