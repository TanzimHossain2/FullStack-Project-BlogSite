const router = require('express').Router();
const {dashBoardController,
    createProfileGetController,
       createProfilePostController,
       editProfileGetController,
       editProfilePostController} = require('../controllers/dashboardController');
const profileValidator = require('../validator/dashboard/profileValidator')

const {isAuthenticated} = require('../middleware/authMiddlewar')


router.get('/',isAuthenticated ,dashBoardController)

router.get('/create-profile',isAuthenticated, createProfileGetController )
router.post('/create-profile',isAuthenticated, profileValidator, createProfilePostController )

router.get('/edit-profile',isAuthenticated, editProfileGetController)
router.post('/edit-profile',isAuthenticated,profileValidator, editProfilePostController)


module.exports= router