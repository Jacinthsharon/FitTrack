const express = require('express')
const {createWorkout, getWorkout, getsingleWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutControllers')

const router = express.Router()

//GET all
router.get('/', getWorkout)

//GET single
router.get('/:id', getsingleWorkout)

//POST
router.post('/', createWorkout)

//DELETE
router.delete('/:id', deleteWorkout)

//UPDATE
router.patch('/:id', updateWorkout)

module.exports = router