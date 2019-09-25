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

  app.get("/api/books", (req, res)=>{
    console.log("LKSDJFKLDSJFLKSDFJ")
    db.Book.find({})
    .then( dbModel => res.status(200).json(dbModel))
    .catch(err => {
      throw err
  })})

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


app.delete("/api/books/:id", (req, res) => {
  id = req.params.id
  db.Book.findOneAndDelete({ title: req.params.id })
  .then(() => {
    res.json({
      success: true
    });
  })
  .catch(err => {
    throw err;
  });
});
};
