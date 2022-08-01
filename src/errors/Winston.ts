import winston, { transports } from "winston";
import moment from "moment";

const logger = winston.createLogger({
    defaultMeta: {
        name: "simple-api",
        time: moment().format(),
    },
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new transports.File({
            filename:
                "C:/Users/Default.DESKTOP-H7921AV/Desktop/Dev/simpleAPI/src/logs/logz.log",
        }),
    ],
});

export { logger };
