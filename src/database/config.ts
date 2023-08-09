import mongoose from "mongoose";

const mongoDB = async () : Promise<void> => {
    try {
        await mongoose.set("strictQuery", false);
        const DB_CONNECTION = process.env.DB_CONNECTION;
        const { connection } = await mongoose.connect(DB_CONNECTION || "mongodb+srv://danielMartinez:daniel1890@cluster0.npgghpc.mongodb.net/ultra-rackets");
        const url = ` ${connection.host}:${connection.port}`;
        console.log(`database connect in ${url}`);
        
    } catch(err){
        console.log(`error in database${err}`);
        
    }
};

export default mongoDB;