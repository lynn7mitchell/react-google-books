import React from 'react'

export default function SavedResults(props) {
    
  const card={
    width: "20vw"
  }
    return (
        <div>
      {console.log(props.books)}
      {props.books.map(book => (
          // <div>
          // <h6>{book.volumeInfo.title}</h6>
          // <button onClick={()=>props.handleSave(book)} className="btn btn-primary">Save</button>
          // </div>
        
          <div style={card}>
            <div className="card sm2">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={book.image}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {book.title}
                  <i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <button onClick={()=>props.handleDelete(book)}>Delete</button>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {book.title}
                  <i className="material-icons right">close</i>
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
    )
}
