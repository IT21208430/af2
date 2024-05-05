const asyncHandler = require('express-async-handler');
const User = require('../models/Users.model');
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({ userId }, 'secret1111', { expiresIn: '1h' });
  };
  //process.env.JWT_SECRET

const checkLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // You can add additional logic here if needed, such as generating a token for authentication

        // const token = jwt.sign({
        //     email : User.email,
        //     password: User.password
        // },'secret123')
        
        const token = generateToken(user._id);

        res.json({ message: 'Login successful', user ,token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const registerUser = asyncHandler(async (req,res)=>{

    const { username, email,password } =req.body;
    try {
        const user = new User({
            username, 
            email,
            password
        });

        await user.save();
        res.status(201).json({ message: 'User added successfully', user });

    } catch (error) {
        
    }
});


module.exports = {
    registerUser,
    checkLogin
}












