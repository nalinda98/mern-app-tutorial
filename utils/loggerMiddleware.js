import logger from "./logger.js";


const loggerMiddleware = (req, res, next) => {
    logger.info(
        `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
    logger.info(`req.body: `, JSON.stringify(req.body));
  next();
};

export default loggerMiddleware;
