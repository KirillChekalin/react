import React, {Component} from 'react';

import './style.css'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        data: null,
        isWrong:false
      },
      username: {
        data: null,
        isWrong: true
      }
    };
  }

  render() {
    const {isOpen} = this.props;
    const isWrongMessage = this.state.message.isWrong;
    const isWrongUsername = this.state.username.isWrong;

    if (!isOpen) return null;

    return(
    <div className="form-group">
       <label htmlFor="comment">Comment:</label>
       <textarea onChange = {this.handleTextareaChange} className={isWrongMessage ? "wrong form-control" : "form-control"} rows="2" id="comment"></textarea>
       <div className="input-group mb-3">
          <input type="text" onChange = {this.handleUsernameChange} className={isWrongUsername ? "wrong form-control" : "form-control"} placeholder="Input you name"></input>
          <div className="input-group-append">
            <button className="btn btn-success" type="submit">Post</button>
          </div>
      </div>
    </div>
    )
  }

  handleTextareaChange = (e) => {
    // const {message, username} = this.state;
    let message = e.target.value;
    let isWrong = message.length > 10;
    this.setState({
      message: {
        data: message,
        isWrong: isWrong
      }
    });
  }
  handleUsernameChange = (e) => {
    let username = e.target.value;
    let isWrong =  ((username.length < 2) || (username.length > 10));
    this.setState({
      username: {
        data: username,
        isWrong: isWrong
      }
    });
  }

}

export default CommentForm;
