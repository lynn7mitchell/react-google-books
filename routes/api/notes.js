module.exports = function(app) {
  const express = require("express");
  const db = require("../../models");
  const axios = require("axios");

  app.get("/test", (req, res) => {
    res.json({
      msg: "notes routes works!"
    });
  });

  app.get("/api/notes", (req, res) => {
    db.Note.find({})
      .then(function(dbNote) {
        // If any Notes are found, send them to the client
        res.json(dbNote);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });

  app.post("/api/notes", (req, res) => {
    console.log("here");
    const note = {
      title: req.body.title,
      content: req.body.content
    };
    db.Note.create(note)
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
