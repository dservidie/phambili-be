import mongoose from "mongoose";

export async function connect() {
   try {
      const mongodbConnection = process.env.REACT_APP_MONGODB_CONNECTION.replace(
         "<dbname>",
         process.env.REACT_APP_MONGODB_DBNAME
      ).replace("<password>", process.env.REACT_APP_MONGODB_PASSWORD);

      await mongoose.connect(mongodbConnection, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
      });

      console.log(">>>> DB OK");
   } catch (e) {
      console.error("Error connecting to MongoDB: ");
      console.error(e);
   }
}
