const { Schema, model } = require('mongoose');

//User Schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required!',
            trim: true
        },
        email: {
            type: String,
            required: " Please provide email!",
            unique: true,
            match: /.+\@.+\..+/, //Regex for email validation
            thoughts: [
                {
                    //mongoose will expect an ObjectId and that the data comes from the Though Model.
                    type: Schema.Types.ObjectId,
                    ref: 'Thought'
                }
            ]
        },
        friends: [
            {
                //expect an ObjectId and a self reference of the user model
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

//virtual
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

//create User model using UserSchema
const User = model('User', UserSchema);

//export User model
module.exports = User;