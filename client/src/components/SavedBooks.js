import React, { Component } from "react";
import API from "../utils/API";
import SavedResults from "./SavedResults";

export class SavedBooks extends Component {
  state = {
    books: [],
    isLoading: true
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data, loading: false }))
      .then(console.log(this.state.books))
      .catch(err => console.log(err.data));
  }

  handleDelete = book => {
    console.log(book.title);

    API.deleteBook(book.title)
      .then(
        API.getBooks()
          .then(res => this.setState({ books: res.data, loading: false }))
          .then(console.log(this.state.books))
          .catch(err => console.log(err.data))
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>SavedBooks</h1>
        <SavedResults
          handleDelete={this.handleDelete}
          books={this.state.books}
        />
      </div>
    );
  }
}

export default SavedBooks;
