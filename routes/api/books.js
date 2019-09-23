module.exports = function(app) {
  const express = require("express");
  const db = require("../../models");
  const axios = require("axios");

  app.get("/test", (req, res) => {
    res.json({
      msg: "notes routes works!"
    });
  });

  app.get("/api/books/:id", (req, res) => {
    id = req.params.id
    console.log(id)
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + id)
    .then(response=>res.json(response.data.items))
    .catch(err => console.log(err))
  });

  app.post("/api/books", (req, res)=>{
    const book ={
        title: req.body.title,
        authors: req.body.authors,
        link: req.body.link,
        image: req.body.image
    }
    db.Book.create(book)
    .then(()=>{
        res.json({
            success: true
        })
    })
    .catch(err => {
        throw err
    })

    
})
};
