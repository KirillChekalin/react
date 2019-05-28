import React from 'react'
import Article from './Article'


export default function ArticleList ({articles}) {
  // console.log(articles[1].comments[0]);
  const articleElements = articles.map(article => {
    return <li key = {article.id}><Article article = {article} /></li>;
  })
  return (
    <ul>
      {articleElements}
    </ul>
  )
}
