const { User } = require('../models');

const userController = {
    //get all users
    getAllUsers(req,res) {
        User.find({})
        .populate({
            path: "thoughts",
            select: "-__v",
        })
        .select("-__v")
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    //get user by id with thoughts and friend data populated
    getUserById({params}, res){
        User.findOne({ _id: params.id})
        .populate({
            path: 'thought',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            //if no user is found, send 404
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with that id!'})
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
    },

    //create new user
    createUser({ body }, res){
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    }
}

module.exports = userController;