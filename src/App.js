import React, { Component } from 'react'
import Navbar from "./components/navbar.js"
import News from "./components/news.js"
export default class App extends Component {
  c = "John";
  
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
