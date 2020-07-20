import { Schema, model } from "mongoose";

const featureSchema = new Schema({
   campaignID: {
      type: Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
   },
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   status: {
      type: String,
      enum: ["Awaiting approbal", "Under review", "Planned", "Not planned", "Done", "Deleted"],
      required: true,
   },
   plannedToVersion: {
      type: String,
      required: true,
   },
   Tags: [String],
   votes: {
      type: Number,
      required: true,
   },
   score: {
      type: Number,
      required: true,
   },
   comments: [
      new Schema({
         user: {
            type: String,
            required: true,
         },
         commentText: {
            type: String,
            required: true,
         },
      }),
   ],
});

export default model("Feature", featureSchema);
