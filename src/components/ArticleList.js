import React, {Component} from 'react'
import accordion from './decorator/accordion'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {filtratedArticlesSelector} from '../selectors'
import Loader from './Loader';
import {loadAllArticles} from '../AC';
import {NavLink} from 'react-router-dom';


class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  componentDidMount() {
    const {loaded, loading, loadAllArticles} = this.props;
    if(!loaded && !loading) loadAllArticles();
  }

  render () {
    const {articles, loading} = this.props;

    if(loading) return <Loader />;

    const articleElements = articles.map(article => {
      return(
        <li key = {article.id}>
          <NavLink to = {`/articles/${article.id}`} activeStyle = {{color: 'red'}}>
            {article.title}
          </NavLink>
        </li>
      )
    });

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}

export default connect((state) => {
  return {
    articles: filtratedArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
  };
}, {loadAllArticles})(accordion(ArticleList));
