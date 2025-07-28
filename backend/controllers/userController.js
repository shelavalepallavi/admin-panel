const User = require('../models/userModel.js')

//login route
const login = async(req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user)
}

module.exports = login;