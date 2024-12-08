const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/tokenUtil.js");
const RefreshToken = require("../models/refreshToken.model.js");
const logger = require("../utils/logger.js");

module.exports = {
  getUsers: async (req, res) => {
    logger.info(`userController.js || getUsers || Getting all users!`);
    try {
      const users = await User.find()
        .sort({ name: 1 })
        .populate(["gymSubscription", "poolSubscription"]);

      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  getUsersDetails: async (req, res) => {
    logger.info(
      `userController.js || getUsersDetailsForMembership || Getting all users!`
    );
    try {
      const users = await User.find(
        {}, // Filter to get users with membershipNumber as null
        { name: 1, _id: 1, email: 1, role: 1 } // Projection to include only name, _id, and email fields
      ).sort({ name: 1 });
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  updateMembersDetails : async (req, res) => {
    logger.info(
      `userController.js || addMembership || Adding membership to user! `
    );
    try {
      const { role,id } = req.body;
      const user = await User.findById(id);
      user.role = role;
      await user.save();
      res.status(200).json(user.name + " user has been updated");
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err });
    }
  },

  verifyUser : async (req, res) => {
    try {
      const token = req.header("Authorization").split(" ")[1];
  
      const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);
  
      if (decoded) {
        return res.status(200).json({ message: "User is authenticated" });
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(401).json({ error: "Please authenticate." });
    }
  },

  getUserById: async (req, res) => {
    logger.info(`userController.js || getUserById || Getting user by id!`);
    try {
      let user = await User.findById(req.params.id)

      user.password = undefined;

      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  getUsersEmail: async (req, res) => {
    logger.info(`userController.js || getUsers || Getting all users!`);
    try {
      const users = await User.find().sort({ name: 1 });
      res.json(users);
    } catch (err) {
      res.json({ message: err });
    }
  },

  register: async (req, res) => {
    logger.info(
      `userController.js || register || Registering a new user! || ${JSON.stringify(req.body)}`
    );
    try {
      const { email, password, name } = req.body;
      let userExists = await User.findOne({ email });
      if (userExists) {
        logger.error("userController.js || register || User already exists!");
        res.status(401).json({ message: "User already exists." });
        return;
      }

      const saltRounds = 10;

      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          logger.error("userController.js || register || Error when hashing the password!");

          res.json({ message: "Internal Server Error!" });
        }

        let user = new User({
          email,
          password: hash,
          name,
        });

        user
          .save()
          .then(() => {
            logger.info("userController.js || register || User created successfully!");
            res.status(201).json({ message: "User created successfully", user });
          })
          .catch((err) => {
            logger.error("userController.js || register || Error when creating the user!");
            res.status(401).json({ message: err.message });
          });
      });
    } catch (err) {
      return res.status(401).send(err.message);
    }
  },

  registerG: async (req, res) => {
    logger.info(
      `userController.js || register || Registering a new user! || ${JSON.stringify(req.body)}`
    );
    try {
      const { email, password, name } = req.body;
      let userExists = await User.findOne({ email });
      if (userExists) {
        const user = await User.findOne({ email });
        bcrypt.compare(password, user.password, async (err, result) => {
          if (result) {
            var response = {
              message: null,
              accessToken: null,
              refreshToken: null,
              name: user.name,
              id: user._id,
              email: user.email,
              role: user.role,
            };
            if (await RefreshToken.exists({ userId: user._id })) {
              const refreshTokenRecord = await RefreshToken.findOne({ userId: user._id });
              response.refreshToken = refreshTokenRecord.token;
              response.message = user.email + " user already logged in!";
            } else {
              response.refreshToken = generateRefreshToken(user);
              response.message = user.email + " user logged in!";
            }
            response.accessToken = generateAccessToken(user);
            logger.info("userController.js || login || User logged in successfully!");
            return res.status(200).json(response);
          }
          logger.error("userController.js || login || Invalid Credentials!");
          return res.status(401).json({ message: "Invalid Credentials" });
        });
        return;
      }

      const saltRounds = 10;

      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          logger.error("userController.js || register || Error when hashing the password!");

          res.json({ message: "Internal Server Error!" });
        }

        let user = new User({
          email,
          password: hash,
          name,
        });

        user
          .save()
          .then(async () => {
            logger.info("userController.js || register || User created successfully!");
            var response = {
              message: null,
              accessToken: null,
              refreshToken: null,
              name: user.name,
              id: user._id,
              email: user.email,
              role: user.role,
            };
            if (await RefreshToken.exists({ userId: user._id })) {
              const refreshTokenRecord = await RefreshToken.findOne({ userId: user._id });
              response.refreshToken = refreshTokenRecord.token;
              response.message = user.email + " user already logged in!";
            } else {
              response.refreshToken = generateRefreshToken(user);
              response.message = user.email + " user logged in!";
            }
            response.accessToken = generateAccessToken(user);
            logger.info("userController.js || login || User logged in successfully!");
            return res.status(200).json(response);
          })
          .catch((err) => {
            logger.error("userController.js || register || Error when creating the user!");
            res.status(401).json({ message: err.message });
          });
      });
    } catch (err) {
      return res.status(401).send(err.message);
    }
  },

  login: async (req, res) => {
    logger.info(
      `userController.js || login || Logging in a user! || ${JSON.stringify(req.body)}`
    );
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });

      if (!user) {
        logger.error("userController.js || login || Invalid Credentials!");
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          var response = {
            message: null,
            accessToken: null,
            refreshToken: null,
            name: user.name,
            id: user._id,
            email: user.email,
            role: user.role,
          };
          if (await RefreshToken.exists({ userId: user._id })) {
            const refreshTokenRecord = await RefreshToken.findOne({ userId: user._id });
            response.refreshToken = refreshTokenRecord.token;
            response.message = user.email + " user already logged in!";
          } else {
            response.refreshToken = generateRefreshToken(user);
            response.message = user.email + " user logged in!";
          }
          response.accessToken = generateAccessToken(user);
          logger.info("userController.js || login || User logged in successfully!");
          return res.status(200).json(response);
        }
        logger.error("userController.js || login || Invalid Credentials!");
        return res.status(401).json({ message: "Invalid Credentials" });
      });
    } catch (err) {
      logger.error("userController.js || login || Error while logging in!");
      return res.status(401).send(err.message);
    }
  },

  logout: async (req, res) => {
    logger.info(`userController.js || logout || Logging out a user! || ${JSON.stringify(req.body)}`);
    const userId = req.body.userId;
    try {
      await RefreshToken.deleteOne({ userId: userId })
        .then((result) => {
          res.status(200).json({ message: "user logged out" });
        })
        .catch((err) => {
          res.status(500).json({ message: "error while logging out!" });
        });
    } catch (err) {
      res.status(500).json({ message: "error while logging out!" });
    }
  },

  token: async (req, res) => {
    logger.info(
      `userController.js || token || Refreshing the token! || ${JSON.stringify(req.body)}`
    );
    const token = req.body.refreshToken;
    if (token == null)
      return res.status(401).json({ message: "refresh token is null" });
    Jwt.verify(token, "S/1+HYYdkmRCP2C69MQBqg==", (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      const accessToken = generateAccessToken(user);

      return res.status(200).json({ accessToken });
    });
  },
};
