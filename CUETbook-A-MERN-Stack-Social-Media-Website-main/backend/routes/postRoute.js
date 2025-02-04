const express = require ('express');
const authMiddleware = require('../middleware/authMiddleware');
const { multerMiddleware } = require('../config/cloudinary');
const { createPost, getAllPosts, getPostByUserId, likePost } = require('../controllers/postController');

const router = express.Router()

//create posts
router.post('/posts',authMiddleware,multerMiddleware.single('media'),createPost)

//get all posts
router.get('/posts',authMiddleware,getAllPosts)

//get post by userid
router.get('/posts/user/:userId',authMiddleware,getPostByUserId)

//user liked post route
router.post('/posts/likes/:postId',authMiddleware,likePost)



module.exports = router;