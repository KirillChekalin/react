import React,{Component} from 'react'

import ArticleList from './ArticleList'
import {articles} from './fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import Select from 'react-select'

import DayPicker from './dayPicker/DayPicker';

class App extends Component {
  state = {
    selection: null
  }
  render() {
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div className="container">
        <Select isMulti options = {options} value = {this.state.selection} onChange = {this.changeSelection}/>
        <h1 className='jumbotron jumbotron-fluid'>App name</h1>
        <DayPicker />
        <ArticleList articles = {articles}/>
      </div>
      )
    }
  changeSelection = selection => {
    this.setState({
      selection: selection
    })
  }
}


export default App
