import Jwt from 'jsonwebtoken';


export const isAdmin = (req, res, next) => {
    if (req.user.role === 'admin' || req.user.role === 'super-admin') {
        console.log("Admin is here!");
        next();
    } else {
        console.log("Unauthorized!");
        return res.sendStatus(403);
    }
};


export const isSuperAdmin = (req, res, next) => {
    if (req.user.role == ( 'super-admin')) {
        console.log("Super Admin is here!")

        next();
    } else {
        return res.sendStatus(403);
    }
}