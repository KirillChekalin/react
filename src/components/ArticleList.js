import React, {Component} from 'react'
import Article from './Article'
import toggleArticle from './decorator/accordion'


class ArticleList extends Component {

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

export default toggleArticle(ArticleList)
