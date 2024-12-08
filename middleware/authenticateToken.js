const Jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    console.log("Token is null!");
    return res.sendStatus(401);
  }

  Jwt.verify(token, "P6Y7EHgigTXou6pu+J3q0w==", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
