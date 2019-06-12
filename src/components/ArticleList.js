import React, {Component} from 'react'
import Article from './Article'
import accordion from './decorator/accordion'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render () {
    const {articles, isOpen, toggleOpen} = this.props;

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

export default connect(({filters, articles}) => {
  const {selected, dateRange: {from, to}} = filters;

  const filteredArticles = articles.filter(article => {
    const published = Date.parse(article.date);
    return (!selected.length || selected.includes(article.id))&&
            (!from || !to || (published > from && published < to));
  });
  return {
    articles: filteredArticles
  };

})(accordion(ArticleList));
