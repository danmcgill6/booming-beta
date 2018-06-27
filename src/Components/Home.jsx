import React, { Component } from 'react';
import Nav from './Nav'
import TableContainer from './TableContainer'
import ArticlePreview from './ArticlePreview'
import FeaturedArticles from './FeaturedArticles'
import TweetDisplay from './TweetDisplay'


class Home extends Component {
  render() {
    const description = 'See what the research team at booming apps has found this week'
    const title = 'Editors Picks'
    return (
      <div className="App">
          <div className="row">
      
      <div  className="col-sm-8 table-container">
        <TableContainer />
      </div>

      <div className="home-article col-sm-4">
      <TweetDisplay/>
      </div>
      </div>
      <hr/>
      <h1>Featured Articles</h1>
      <div className='row'>
          <FeaturedArticles />
      </div>
    
      </div>
    );
  }
}

export default Home;