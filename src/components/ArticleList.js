import React, {Component} from 'react'
import Article from './Article'
import accordion from './decorator/accordion'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {filtratedArticlesSelector} from '../selectors'
import Loader from './Loader';


import {loadAllArticles} from '../AC';

class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  componentDidMount() {
    const {loaded, loading, loadAllArticles} = this.props;
    if(!loaded || !loading) loadAllArticles();
  }

  render () {
    const {articles, isOpen, toggleOpen, loading} = this.props;

    if(loading) return <Loader />;

    const articleElements = articles.map(article => {
      return(
        <li key = {article.id}>
          <Article
            article = {article}
            isOpen = {article.id === isOpen}
            toggleOpen = {toggleOpen(article.id)}
          />
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
