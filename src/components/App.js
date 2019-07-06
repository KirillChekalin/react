import React,{Component} from 'react'

import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'

import Counter from './Counter';
import Filters from './Filters';

import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="container">
          <h1 className=''>Application</h1>
          <div>
            <h2>Main menu</h2>
            <div><NavLink activeStyle = {{color: 'red'}} to = "/counter">Counter</NavLink></div>
            <div><NavLink activeStyle = {{color: 'red'}} to = "/filters">Filters</NavLink></div>
            <div><NavLink activeStyle = {{color: 'red'}} to = "/articles">Articles</NavLink></div>
          </div>
          <Route path = "/counter" component = {Counter} />
          <Route path = "/filters" component = {Filters} />
          <Route path = "/articles" component = {ArticleList} />
        </div>
      </Router>
      )
    }

}


export default App
