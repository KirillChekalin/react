import React, {Component} from 'react';
import Comment from './Comment';
import {connect} from 'react-redux';
import {checkAndLoadCommentsForPage} from '../../AC';
import Loader from '../Loader';
import {NavLink} from 'react-router-dom'

class CommentsPagination extends Component {


  componentWillMount() {
    this.props.checkAndLoadCommentsForPage(this.props.page);
  }

  componentWillReceiveProps({page, checkAndLoadCommentsForPage}) {
    checkAndLoadCommentsForPage(page);
  }


  render() {
    const {total} = this.props;
    if (!total) return <Loader />;
    return (
      <div>
        {this.getCommentItems()}
        {this.getPaginator()}
      </div>
    );
  }



  getCommentItems(){
    const {loading, comments} = this.props;
    console.log(loading, comments);

    if (loading || !comments) return <Loader />;

    const commentItems = comments.map(id => {
      if (!id) return null;
      return <li key = {id}><Comment id = {id} /></li>
    });

    return (
      <ul>
        {commentItems}
      </ul>
    );
  }

  getPaginator() {
    const {total} = this.props;
    const items = [];
    for (let i = 1; i <= Math.floor((total - 1) / 5) + 1; i++) {
      items.push(
        <li key = {i}>
          <NavLink to = {`/comments/${i}`} activeStyle = {{color: 'red'}}>
            {i}
          </NavLink>
        </li>
      );
    }
    return <ul>{items}</ul>;
  }


};

export default connect((state, {page}) => {
  const {total, pagination} = state.comments;
  return {
    total,
    loading: pagination.getIn([page, 'loading']),
    comments: pagination.getIn([page, 'ids'])
  }
}, {checkAndLoadCommentsForPage})(CommentsPagination);
