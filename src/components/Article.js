import React, { PureComponent} from 'react'
import CommentList from './comments/CommentList';
import { CSSTransitionGroup } from 'react-transition-group'
import {connect} from 'react-redux'
import {deleteArticle} from '../AC'
import CommentForm from './commentForm/CommentForm';

import '../style.css'

class Article extends PureComponent{

// оптимизация! использовать осторожно и редко ! в тех местах которые тормозят
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isOpen !== this.props.isOpen;
  // }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    // const [inProp, setInProp] = useState(false);

    return (
      <div className='card mx-auto' >
        <div className='card-header'>
          <h2>
            {article.title}
            <button  onClick = {toggleOpen} className='btn btn-primary btn-md float-right'>
              {isOpen ? 'close' : 'open'}
            </button>
            <button onClick = {this.handleDelete} className='btn btn-warning btn-md float-right'>delete me</button>
          </h2>
        </div>
        <div  className={isOpen ? 'card-body' : null}>
        <CSSTransitionGroup
          transitionName = 'example'
          transitionEnterTimeout = {300}
          transitionLeaveTimeout = {500}  >
              {this.getBody()}
        </CSSTransitionGroup>
        </div>
        <CommentForm isOpen = {isOpen}/>
        <CommentList comments = {isOpen ? article.comments : null}/>
      </div>
    )
  }

  handleDelete = () => {
    const{deleteArticle, article} = this.props;
    deleteArticle(article.id);
  };

  getBody() {
    const {article, isOpen} = this.props;
    if(!isOpen) return null;
    return <section>{article.text}</section>;
  }



}


export default connect(null, {deleteArticle})(Article)
