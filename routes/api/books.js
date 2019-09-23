module.exports = function(app) {
  const express = require("express");
  const db = require("../../models");
  const axios = require("axios");

  app.get("/test", (req, res) => {
    res.json({
      msg: "notes routes works!"
    });
  });

  app.get("/api/savedBooks", (req, res) => {
    db.Note.find({})
      .then(function(dbBooks) {
        res.json(dbBooks);
      })
      .catch(function(err) {
        res.json(err);
      });
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
