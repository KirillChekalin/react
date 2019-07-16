import React,{Component} from 'react'

import Articles from './routes/Articles';
import newArticle from './routes/newArticle';
import CommentsPage from './routes/CommentsPage';
import NotFound from './routes/NotFound';




import 'bootstrap/dist/css/bootstrap.css'

import Counter from './Counter';
import Filters from './Filters';

import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

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
            <div><NavLink activeStyle = {{color: 'red'}} to = "/comments">Comments</NavLink></div>
          </div>
          <Switch>
            <Route path = "/counter" component = {Counter} />
            <Route path = "/filters" component = {Filters} />
            <Route path = "/articles/new" component = {newArticle} />
            <Route path = "/articles" component = {Articles} />
            <Route path = "/comments/:page" component = {CommentsPage} />
            <Route path = "*" component = {NotFound} />
          </Switch>

        </div>
      </Router>
      )
    }

}


export default App
