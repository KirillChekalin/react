import React, {Component} from 'react'
import Article from './Article'


export default class ArticleList extends Component {
  state = {
    openArticleId: null
  }
  render () {
    const {articles} = this.props;
    // console.log(articles[1].comments[0]);
    const articleElements = articles.map(article => {
      return(
        <li key = {article.id}>
          <Article
            article = {article}
            isOpen = {article.id === this.state.openArticleId}
            toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
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

  toggleOpenArticle(openArticleId) {
    this.setState({openArticleId})
  }
}
