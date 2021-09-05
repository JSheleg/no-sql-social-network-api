const { User, Thought } = require('../models');

const thoughtController = {

    //get all Thoughts
    getAllThoughts( req, res) {
        Thought.find({})
        .populate({ 
            path: "reactions",
            select: "-__v",
        })
        .select("-__v")
        .sort({_id: -1})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    //get thought by id
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
    // add thought to user
    createThought({body}, res) {
        console.log(body)
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: _id } },
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
                return User.findOneAndUpdate(
                    {_id: params.username},
                    {$pull: {thoughts: params.thoughtId}},
                    {new: true}
                );
            })
            .then(dbUserData => {
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    //create reaction
    createReaction({params, body}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$addToSet: {reactions: body}},
            {new: true, runValidators: true} 
        )
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message:" No thought found wit this id"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    //delete reaction
    deleteReaction({params}, res){
        console.log(params)
        Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$pull: {reactions: { reactionId: params.reactionId}}},
            {new: true, runValidators: true}
        )
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
    }

};

module.exports = thoughtController;