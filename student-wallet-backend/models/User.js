//walled/student-wallet-backend/models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  // For password hashing
const jwt = require('jsonwebtoken'); // For JWT token generation

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures no two users have the same username
        trim: true,
        minlength: 3,  // Minimum length for username
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no two users have the same email
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,  // Minimum password length
    },
    walletBalance: {
        type: Number,
        default: 0, // Default wallet balance when user is created
    },
    createdAt: {
        type: Date,
        default: Date.now,  // Sets the current date as the creation date
    },
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();  // Skip if the password hasn't been modified
    }

    try {
        const salt = await bcrypt.genSalt(10);  // Generate a salt
        this.password = await bcrypt.hash(this.password, salt);  // Hash the password
        next();
    } catch (error) {
        next(error);  // Pass any error to the next middleware
    }
});

// Method to check if the provided password matches the hashed password
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Method to generate JWT for the user
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
