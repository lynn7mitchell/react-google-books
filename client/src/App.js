import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import BookSearch from './components/BookSearch';
import SavedBooks from './components/SavedBooks';
export class App extends Component {

  state={
    notes: []
  }


  render() {
    
    return (
      <div>
        <h1>Books</h1>
        <Router>
          <Route exact path="/search" component={BookSearch}/>
          <Route exact path="/saved" component={SavedBooks}/>
        </Router>
      </div>
    )
  }
}

export default App

