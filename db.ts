import mongoose from "mongoose";

const uri ="mongodb+srv://Jhashivam121:Shivam%408812@cluster0.hn16eav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB() {
    await mongoose.connect(uri);
    console.log("Connected to the Database");
}

export default connectDB;