import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    console.log("Made it here")
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    console.log(id)
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData)
    return axios.post("/api/books", bookData);
  }
};
