import React, { PureComponent} from 'react'
import CommentList from './comments/CommentList';
import { CSSTransitionGroup } from 'react-transition-group'
import {connect} from 'react-redux'
import {deleteArticle, loadArticle} from '../AC'
import CommentForm from './commentForm/CommentForm';
import Loader from './Loader'
import '../style.css'

class Article extends PureComponent{

// оптимизация! использовать осторожно и редко ! в тех местах которые тормозят
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isOpen !== this.props.isOpen;
  // }

  componentWillReceiveProps({isOpen, loadArticle, article}) {
    if (isOpen && !article.text && !article.loading) loadArticle(article.id);
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;

    const {commentsIsLoaded, commentsIsLoading, comments} = article;
    const commentsId = comments;

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
        <CommentForm articleId = {article.id} isOpen = {isOpen}/>
        <CommentList
          isArticleOpen = {isOpen ? article.id : null}
          article = {article}
        />
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

    if (article.loading) return <Loader/>;
    return <section>{article.text}</section>;
  }



}


export default connect(null, {deleteArticle, loadArticle})(Article)
