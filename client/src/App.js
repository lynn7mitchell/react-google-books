import React, { Component } from 'react'
import API from './utils/API'
import BookSearch from './components/BookSearch';
export class App extends Component {

  state={
    notes: []
  }


  render() {
    
    return (
      <div>
        <h1>Books</h1>
        <BookSearch/>
      </div>
    )
  }
}

export default App

