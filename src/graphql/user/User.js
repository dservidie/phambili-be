import { Schema, model } from "mongoose";

const userSchema = new Schema({
   firstName: {
      type: String,
      required: true,
   },
   lastName: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   auth0_ID: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
   },
});

export default model("User", userSchema);
