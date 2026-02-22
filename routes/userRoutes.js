
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../model/User.js'; 
import { hashPassword, comparePassword } from '../Utlis/bcrypt.js';

const router = express.Router();

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const encrypted = await hashPassword(password);
        const newUser = new User({ userName, email, password: encrypted });
        await newUser.save();
        res.status(201).json({ message: "User Registered!" });
    } catch (err) {
        res.status(400).json({ message: "Registration failed!", error: err.message });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body; 
        const user = await User.findOne({ userName });

        if (user && await comparePassword(password, user.password)) {
            const token = jwt.sign(
                { id: user._id, userName: user.userName }, 
                process.env.JWT_SECRET, 
                { expiresIn: '24h' }
            );
            res.json({ message: "Login Success", loginToken: token });
        } else {
            res.status(401).json({ message: "Username ya Password galat hai!" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

export default router;