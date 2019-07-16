import React, {Component} from 'react';
import NewArticle from '../newArticle';
import {Route} from 'react-router-dom';


class newArticle extends Component {
  render() {
    return (
      <div>
        <Route path = "/articles/new" render = {this.getArticle} />
      </div>
    );
  }

  getArticle = ({match}) => {
    return <NewArticle />;
  }


}

export default newArticle;
