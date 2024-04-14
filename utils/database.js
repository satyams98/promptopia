import mongoose from 'mongoose';

let isConnected = false;

const connectToDb = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("Mongo db is already connected");
        return;
    } 
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share_prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });  

        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (e){
        console.log("error is->"+e);
    }
}

export default connectToDb;