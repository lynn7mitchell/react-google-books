import React, { Component } from "react";
import API from "../utils/API";

export class BookSearch extends Component {
  state = {
    bookSearch: "",
    books: []
  };

  handleChange = e => {
    console.log(e.target.value);
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const id = this.state.bookSearch

    API.getBook(id)
      .then(res => (this.setState({ books: res.data, loading: false })))
      .then(
          console.log(this.state.books)
      )
      .catch(err => console.log(err.data));

    
  };

  render() {
    return (
      <div className="container">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="bookSearch"
                type="text"
                className="validate"
                name="bookSearch"
                onChange={this.handleChange}
              />
              <label>Search for a book</label>
            </div>
            <div className="row">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookSearch;
