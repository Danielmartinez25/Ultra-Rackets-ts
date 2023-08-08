import mongoose from "mongoose";

const mongoDB = async () : Promise<void> => {
    try {
        const {connection} = await mongoose.connect(process.env.DB_CONNECTION || undefined);
        const host = `database connect in ${connection.host}:${connection.port}`;
        console.log(host);
        
    } catch (error) {
        console.log(`error in database ${error.message}`);
        
    }
};

export default mongoDB;