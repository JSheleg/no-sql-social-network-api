const router = require('express').Router();

//import functionality from user-controller

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')


// set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
    
module.exports = router;