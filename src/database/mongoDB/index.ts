import mongoose from "mongoose";
import { logger } from "../../errors/Winston";

const mongoConnect = mongoose
    .connect(`${process.env.URL_MONGODB}`)
    .then(() => {
        logger.info("Connect to database");
    })
    .catch((err) => logger.error(err.message));

export { mongoConnect };
