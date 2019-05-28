import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
  // static propTypes = {
  //   comments: PropTypes.array.isRequired
  // }
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render () {
    const {comments} = this.props;
    if(!comments) return null;

    return (
      <ul  className = 'card-footer'>
        <button onClick = {this.handleClick} className = 'btn btn-primary btn-sm'>
          {this.state.isOpen ? 'Hide' : 'Show'} comments
        </button>
        {this.getBody()}
      </ul>
    );
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  getBody () {
    if (!this.state.isOpen) return null;
    const {comments} = this.props;

    if (!comments) return null;
    const commentElements = comments.map(comment => {
      if (!comment) return null;
      return <li key = {comment.id}><Comment comment = {comment} /></li>;
    });
    return commentElements;
  }

};

export default CommentList;
