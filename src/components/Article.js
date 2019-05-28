import React, {Component} from 'react'
import CommentList from './comments/CommentList';

class Article extends Component{
  state = {
      isOpen: true
    };


  render() {
    const {article} = this.props;
    // if (article.comments) console.log(article.comments[0]);
    // const body = this.state.isOpen && <section className='card-text'>{article.text}</section>;

    return (
      <div className='card mx-auto' >
        <div className='card-header'>
          <h2>
            {article.title}
            <button onClick = {this.handleClick} className='btn btn-primary btn-lg float-right'>
              {this.state.isOpen ? 'close' : 'open'}
            </button>
          </h2>
        </div>
        <div className='card-body'>
          {this.getBody()}
        </div>
        <CommentList comments = {this.state.isOpen ? article.comments : null}/>
      </div>
    )
  }
  getBody() {
    if(!this.state.isOpen) return null;
    const {article} = this.props;
    return <section>{article.text}</section>;
  }
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}


export default Article
