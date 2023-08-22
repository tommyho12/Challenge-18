const { friend } = require('../models');

const friendController =  {
    //get all the users
    getAllFriends(req, res) {
        friend.find({})
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err))
    },
    //get a single user by id
    getFriendById(req, res) {
        friend.findById(req.params.userId)
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err));
    },
    //create a user
    createFriend(req, res) {
        friend.create(req.body)
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err));
    },
    //update user by id
     updateFriendById(req, res) {
        friend.findOneAndUpdate(
            {_id: req.params.userId},
            req.body,
            { new: true }
            )
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(userData);
            })
            .catch(err => res.status(500).json(err));
    },
    //delete user by id
    deleteFriendById(req, res) {
        friend.findOneAndDelete({_id: req.params.userId})
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json({ message: 'User deleted successfully' });
                })
                .catch(err => res.status(500).json(err));
    },
    //add friend
    addFriend(req, res) {
        friend.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body.friendId || req.params.friendId} },
            { new: true }
        )
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(userData);
            })
            .catch(err => res.status(500).json(err));
    },
    //remove a friend
    removeFriend({ params }, res) {
        friend.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true },
        )
            .then((dbFriendData) => {
                if(!dbFriendData) {
                    return res.status(404).json({ message: "No user with this id!" });
                }
                //making sure the friend if removed
                const kicked = !dbUserData.friends.includes(params.friendId);
                
                if(kicked) {
                    res.json({ message: "User removed from Your friend list", dbFriendData });
                } else {
                    res.json(dbFriendData);
                }
            })
            .catch((err) => res.status(400).json(err));
    }
}

module.exports = friendController