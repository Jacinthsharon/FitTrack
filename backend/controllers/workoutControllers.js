const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


//GET all
const getWorkout = async(req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}


//GET single
const getsingleWorkout = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: 'no such data exist!'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        res.status(400).json({error: 'no such data exist!'})
    }

    res.status(200).json(workout)
}


//POST
const createWorkout = async(req, res) => {
    const { title, reps, load } = req.body;
    

    //add docs to db
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//UPDATE
const updateWorkout = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: 'no such data exist!'})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        res.status(400).json({error: 'no such data exist!'})
    }

    res.status(200).json(workout)
}


//DELETE
const deleteWorkout = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: 'no such data exist!'})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        res.status(400).json({error: 'no such data exist!'})
    }

    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkout,
    getsingleWorkout,
    deleteWorkout,
    updateWorkout
}