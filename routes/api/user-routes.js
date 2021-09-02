const router = require('express').Router();

//import functionality from user-controller

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

module.exports = router;