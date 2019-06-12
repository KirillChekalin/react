import React,{Component} from 'react'

import ArticleList from './ArticleList'
import {articles} from './fixtures'
import 'bootstrap/dist/css/bootstrap.css'

import Counter from './Counter';
import Filters from './Filters';

class App extends Component {

  render() {

    return (
      <div className="container">
        <h1 className=''>App name</h1>
        <Filters />
        <Counter />
        <ArticleList/>
      </div>
      )
    }

}


export default App
