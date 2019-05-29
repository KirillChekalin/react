import React, {Component} from 'react'

class UserForm extends Component {
  state = {
    username: ''
  }

  render() {

    return(
      <input type = 'text' value = {this.state.username} onChange = {this.handleUserChange} />
    )
  }
  handleUserChange = (e) => {
    if (e.target.value.length > 10) return ;
    this.setState({
      username: e.target.value
    })
  }
}

export default UserForm;
