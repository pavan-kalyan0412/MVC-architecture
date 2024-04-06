const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req,res) =>{
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
         const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).json({error: 'Email already exist'})
          }
         await new User ({ username, email, password:hashedPassword }).save();
          res.status(201).json({ message: 'user registered successfully'})
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}