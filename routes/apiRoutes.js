const express = require("express");
const app = express();
const db = require('../models')

// routes
app.get("/workouts", (req, res) => {
    db.Workout.find({}).then((err, dbWorkout) => {
      if (err) {
        res.json(err)
      }
       res.json(dbWorkout)
      })
    //catching errors if it's 500, printing in JSON
    
});

//add workout
app.post("/workouts", (req, res) => {
  db.Workout.create({}).then((err, dbWorkout) => {
    if (err) {
      console.log('THERE WAS AN ERROR! ', err)
      res.json(err)
    }
     res.json(dbWorkout)
    })
});

app.put("/workouts/:id", ({body, params}, res) => {
  db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, {runValidators: true}).then((err, dbWorkout) => {
    if (err) {
      console.log('THERE WAS AN ERROR! ', err)
      res.json(err)
    }
     res.json(dbWorkout)
    })
});

// go to database and get the last 7 days of workouts
app.get("/workouts/range", (req, res) => {
  db.Workout.find({ day: {$gt: "2021-01-08", $lt: "2021-01-15"} }).then((err, dbWorkout) => {
    if (err) {
      console.log('THERE WAS AN ERROR! ', err)
      res.json(err)
    }
     res.json(dbWorkout)
    })
});

module.exports = app;