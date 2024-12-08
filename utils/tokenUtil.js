import Jwt from 'jsonwebtoken';
import RefreshToken from '../models/refreshToken.model.js';
import logger from './logger.js';

export const generateAccessToken = (user) => {
    const payload = {
        email: user.email,
        _id: user._id,
        role: user.role,
        name: user.name
    }
    return Jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn : '1y'});
}

export const generateRefreshToken = (user) => {
    const payload = {
        email: user.email,
        _id: user._id,
        role: user.role,
        name: user.name
    }
    const refreshToken = Jwt.sign(payload,process.env.JWT_REFRESH_KEY);
    const token = new RefreshToken({
        token: refreshToken,
        userId: user._id
    })
    token.save();
    return refreshToken;
}

export const deleteByUserId = (userId) => {
    RefreshToken.deleteOne({userId: userId}).then((result)=>{
        logger.info("userController.js || logout || User logged out successfully!");
    }
    ).catch((err)=>{
        logger.error("userController.js || logout || Error while logging out!");
    });
}