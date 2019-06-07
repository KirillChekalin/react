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

export default connect(state => ({
  articles: state.articles
}))(accordion(ArticleList));
