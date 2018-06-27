import React, { Component } from 'react';
import ArticlePreview from './ArticlePreview'

class FeaturedArticles extends Component {

  render() {
    let articleData = [
      {
        image:'https://picsum.photos/420/320?image=0',
        description: 'test description',
        title:'test title'
      },
      {
        image:'https://picsum.photos/420/320?image=0',
        description: 'test description',
        title:'test title'
      },

      {
        image:'https://picsum.photos/420/320?image=0',
        description: 'test description',
        title:'test title'
      },
      {
        image:'https://picsum.photos/420/320?image=0',
        description: 'test description',
        title:'test title'
      },

    ]

    let articles = articleData.map(article =>{
      return (
        <div className="ArticleContainer col-sm-3">
          <ArticlePreview image={article.image} description={article.description} title={article.data} />
        </div>     
         )
    })
    return (
      <div className='row'>
        {
          articles
        }
      </div>
    );
  }
}

export default FeaturedArticles;