import mongoose from "mongoose";

const mongoDB = async () : Promise<void> => {
    try {
        await mongoose.set("strictQuery", false);
        const DB_CONNECTION = process.env.DB_CONNECTION;
        const {connection} = await mongoose.connect(DB_CONNECTION | undefined);
        const url = ` ${connection.host}:${connection.port}`;
        console.log(`database connect in ${url}`);
        
    } catch (e){
        console.log(`error in database ${e.message}`);
        
    }
};

export default mongoDB;