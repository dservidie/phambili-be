import { Schema, model } from "mongoose";

const organizationSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: false,
   },
   users: [
      {
         userID: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
         },
         role: {
            type: String,
            required: true,
            enum: ["owner", "admin", "client", "guest"],
         },
      },
   ],
   status: {
      type: String,
      required: true,
   },
});

export default model("Organization", organizationSchema);
