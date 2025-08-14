const User = require('../models/userModel.js')


const login = async(req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email, password})
    if(!user){
      return res.status(401).json({message: 'Invalid email or password'})
    }
    res.status(200).json({message: 'Login successful', user})
  } catch (error) {
    res.status(500).json({message: 'server error', error})
  }
};

const register = async(req, res) => {
  try {
    const {name, email, password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
      res.status(400).json({message: 'Email already registered'})
    }
    const newUser = new User({name, email, password});
    await newUser.save();
    res.status(201).json({message: 'User registered successfully', user: newUser})
  } catch (error) {
    res.status(500).json({message: 'server error', error})
  }
};

module.exports = {login, register};