import React, { Component } from 'react'
import NewsItem from '../components/newsItem.js'
export class news extends Component {
  render() {
    return (
      <div>
        This is the news component
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default news
