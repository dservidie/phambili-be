import mongoose from "mongoose";

export async function connect() {
   try {
      let mongodbConnection = process.env.REACT_APP_MONGODB_CONNECTION;
      mongodbConnection = mongodbConnection.replace(
         "<dbname>",
         process.env.REACT_APP_MONGODB_DBNAME
      );
      mongodbConnection = mongodbConnection.replace(
         "<password>",
         process.env.REACT_APP_MONGODB_PASSWORD
      );

      await mongoose.connect(mongodbConnection, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
      });
   } catch (e) {
      console.error("Error connecting to MongoDB: ");
      console.error(e);
   }
}
