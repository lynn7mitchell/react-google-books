import React, { Component } from 'react'
import NewNote from './components/NewNote'
import NoteContainer from './components/NoteContainer'
import API from './utils/API'
export class App extends Component {

  state={
    notes: []
  }
  componentDidMount(){
    API.getNotes()
    .then(res => this.setState({ notes: res.data, loading: false }))
    .catch(err => console.log(err.data));
}

  render() {
    
    return (
      <div>
        <h1>Notes</h1>
        <NewNote/>
        <NoteContainer/>
      </div>
    )
  }
}

export default App

