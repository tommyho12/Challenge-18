const router =  require('express').Router()
const {
    getAllFriends,
    getFriendById,
    createFriend,
    updateFriendById,
    deleteFriendById,
    addFriend,
    removeFriend,

} = require('../../controllers/friendController');

router.route('/').get(getAllFriends).post(createFriend);

router.route('/:friendId').get(getFriendById).put(updateFriendById).delete(deleteFriendById);

router.route('/:friendId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;