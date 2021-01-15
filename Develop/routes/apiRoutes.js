const express = require("express");
const app = express();
const db = require('../models')

// routes
app.get("/workouts", (req, res) => {
    db.Workout.find({}).then((err, dbWorkout) => {
      if (err) {
        console.log('THERE WAS AN ERROR!!!!! ', err)
        res.json(err)
      }
       res.json(dbWorkout)
      })
    //catching errors if it's 500, printing in JSON
    
});

app.get("/workouts/range", (req, res) => {
  res.json({ text: 'hello world'})
  // go to database and get the last 7 days of workouts
});

//post note

app.post("/notes", function(req, res) {
  store
  .addNotes(req.body)
  .then((note) => res.json(note))
  .catch(err => res.status(500).json(err))
});

//delete note
app.delete("/notes/:id", function(req, res) {
  const id = req.params.id;
  store
  .removeNotes(id)
  .then((note) => res.json(note))
  .catch(err => {
    console.log("error", err);
    res.status(500).json(err)
  }
)});

module.exports = app;