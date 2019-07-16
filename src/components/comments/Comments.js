import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadComments} from '../../AC';
import {mapToArr} from '../../helpers';
import {NavLink} from 'react-router-dom';

import Comment from './Comment';



class Comments extends Component {

  componentDidMount(props) {
    const {loadComments} = this.props;
    loadComments(0, 5);
  };
  componentDidUpdate(){

  }

  render() {
    const {total} = this.props;
    return (
      <div>
        <ul>
          {this.getBody()}
        </ul>
      </div>
    );


  };

  getBody() {

    const {comments, total} = this.props;
    let arr = [];

    for (let i = 0; i < total / 5; i++) {
      arr.push(
        <li key = {i}>
          <NavLink to = {`/comments/${i}`} activeStyle = {{color: 'red'}}>
            From {i * 5} to {i * 5 + 5}
          </NavLink>
        </li>
      );
    }
    return arr;
  };

};

export default connect(state => {
  return {
    total: state.comments.total
  };
}, {loadComments})(Comments);
