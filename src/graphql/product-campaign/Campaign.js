import { Schema, model } from "mongoose";

const campaignSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   productID: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
   },
   type: {
      type: String,
      enum: ["Ranking", "Upvote", "UpDownvote"],
      required: true,
   },
   features: [
      {
         type: Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },
   ],
   status: {
      type: String,
      required: true,
   },
});

export default model("Campaign", campaignSchema);
