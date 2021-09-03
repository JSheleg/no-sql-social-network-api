const router = require('express').Router();

const{ 
   getAllThoughts,
   getThoughtById,
   createThought,
   updateThought,
   deleteThought,
   createReaction,
   deleteReaction
} = require('../../controllers/thought-controller')

//get and post at /api/thought
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

//routes at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

//routes at /api/thought/:id/reactions/:id
router 
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

router
module.exports = router