import React, { PureComponent} from 'react'
import CommentList from './comments/CommentList';
import { CSSTransitionGroup } from 'react-transition-group'

import '../style.css'

class Article extends PureComponent{

// оптимизация! использовать осторожно и редко ! в тех местах которые тормозят
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isOpen !== this.props.isOpen;
  // }
  componentWillUpdate(){
    console.log('update');
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    // const [inProp, setInProp] = useState(false);

    return (
      <div className='card mx-auto' >
        <div className='card-header'>
          <h2>
            {article.title}
            <button  onClick = {toggleOpen} className='btn btn-primary btn-lg float-right'>
              {isOpen ? 'close' : 'open'}
            </button>
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
        <CommentList comments = {isOpen ? article.comments : null}/>
      </div>
    )
  }

  getBody() {
    const {article, isOpen} = this.props;
    if(!isOpen) return null;
    return <section>{article.text}</section>;
  }



}


export default Article
