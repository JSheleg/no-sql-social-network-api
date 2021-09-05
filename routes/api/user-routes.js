const router = require('express').Router();

//import functionality from user-controller

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller')


// set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
 
//all routes at /api/users/:id    
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
    
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)
    
module.exports = router;