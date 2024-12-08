
import { createLogger, format, transports, config } from "winston";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});



const logger = createLogger({
    format: combine(
        label({ label: 'Boost Sports <-> BuildZone IT' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: `./logs/${Date.now()}combined.log` })
    ]
}); 

export default logger;