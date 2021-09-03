const { User, Thought } = require('../models');

const thoughtController = {
    // add thougt to user
  addThought({ params, body}, res) {
    Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { Thoughts: _id } },
                { new: true }
            );        
        })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'No Thoughts found with id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
  },

  getThoughtById({params}, res){
    Thought.findOne({ _id: params.id})
    .then(dbThoughtData => {
        //if no user is found, send 404
        if(!dbThoughtData){
            res.status(404).json({ message: 'No thought found with that id!'})
            return;
        }
        res.json(dbThoughtData)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    });

    },

    createThought({ params, body}, res) {
        console.log(body);
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { Thought: _id } },
                { new: true }
            );        
        })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({message: 'No Thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    //update thought
    updateThought( {params, body}, res){
        Thought.findOneAndUpdate({ _id: params.id}, body, {new: true, runValidators: true})
            .then(dbThoughtData => {
                if(!dbThoughtData){
                    res.status(404).json({message: "No Thought found with that id!"});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },

    //delete thought
    deleteThought({ params}, res){
        Thought.findOneAndDelete({ _id: params.id})
            .then(dbThoughtData => {
                if(!dbThoughtData){
                    res.status(404).json({mesage: "No Thought found with that id"});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },

    






}