import mongoose from "mongoose";

const mongoConnect = mongoose
    .connect(`${process.env.URL_MONGODB}`)
    .then(() => {
        console.log("Connect to database");
    })
    .catch((err) => console.log(err));

export { mongoConnect };
