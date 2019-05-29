import React,{Component} from 'react'

import ArticleList from './ArticleList'
import {articles} from './fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import UserForm from './UserForm'


class App extends Component {
  state = {
    username: ''
  }
  render() {
    return (
      <div className="container">
        Name: <UserForm />
        <h1 className='jumbotron'>App name</h1>
        <ArticleList articles = {articles}/>
      </div>
      )
    }
  handleUserChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
}


export default App
