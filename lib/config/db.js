import mongoose from "mongoose";

const connectDb = async () => {
    if (!process.env.MONGO_URL) {
    console.log("Unable to Find url from the env file");
    return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connection successfully Done")
    } catch (error) {
        console.log("Something went wrong in the connection of the database ", error)

    }
}
export default connectDb;