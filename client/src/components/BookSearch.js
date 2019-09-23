import React, { Component } from "react";

export class BookSearch extends Component {
  state = {
    bookSearch: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="bookSearch"
              type="text"
              className="validate"
              name="bookSearch"
              onChange = {this.handleChange}
            />
            <label>Search for a book</label>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSearch;
