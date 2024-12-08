const Jwt = require('jsonwebtoken');
const RefreshToken = require('../models/refreshToken.model.js');
const logger = require('./logger.js');

const generateAccessToken = (user) => {
    const payload = {
        email: user.email,
        _id: user._id,
        role: user.role,
        name: user.name
    };
    return Jwt.sign(payload, "P6Y7EHgigTXou6pu+J3q0w==", { expiresIn: '1y' });
}

const generateRefreshToken = (user) => {
    const payload = {
        email: user.email,
        _id: user._id,
        role: user.role,
        name: user.name
    };
    const refreshToken = Jwt.sign(payload, "S/1+HYYdkmRCP2C69MQBqg==");
    const token = new RefreshToken({
        token: refreshToken,
        userId: user._id
    });
    token.save();
    return refreshToken;
}

const deleteByUserId = (userId) => {
    RefreshToken.deleteOne({ userId: userId })
        .then((result) => {
            logger.info("userController.js || logout || User logged out successfully!");
        })
        .catch((err) => {
            logger.error("userController.js || logout || Error while logging out!");
        });
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    deleteByUserId
};
