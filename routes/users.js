const express = require("express")
const router = express.Router()
const {userList, userAdd} = require('../controllers/userController')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended:false}))
router.get('/', (req, res) => {
    res.send('Get route')
})

router.get('/list', userList)
router.post('/add', userAdd)


module.exports = router;