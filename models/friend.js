const { Schema, model } = require('mongoose');

const friendSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: { 
        validator: function(v) {
            return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        }
      }
    },
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

const friend = model('User',userSchema)

module.exports = friend
    
