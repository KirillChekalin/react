import React, {Component} from 'react'
import CommentList from './comments/CommentList';
// import toggleOpen from './decorator/toggleOpen'

class Article extends Component{
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('did mount');
  }
  componentWillUpdate(){
    console.log('will update');
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (

      <div className='card mx-auto' >
        <div className='card-header'>
          <h2>
            {article.title}
            <button onClick = {toggleOpen} className='btn btn-primary btn-lg float-right'>
              {isOpen ? 'close' : 'open'}
            </button>
          </h2>
        </div>
        <div className='card-body'>
          {this.getBody()}
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