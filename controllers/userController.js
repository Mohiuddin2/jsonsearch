const User = require('../model/Users')

const userList = async(req, res) => {
   let data = await User.find()
   res.json(data)
}

const userAdd = async(req, res)=>{
    console.log(req.body)
const {name, email, phone, password} = req.body
const user = new User({name, email, phone, password})
let response = await user.save()

res.status(200).json({scucess: true, response})
}

module.exports = {userList, userAdd}