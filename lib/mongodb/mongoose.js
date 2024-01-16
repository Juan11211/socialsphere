import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() =>{
    mongoose.set('strictQuery', true)

    if (isConnected){
        console.log('mongodb is already connected')

        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "SocialSpheres",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true

        console.log('MONGODB is connected')
    } catch(err){
        console.log(`cant connect to mongodb`, err)
    }
}