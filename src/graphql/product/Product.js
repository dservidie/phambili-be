import { Schema, model } from "mongoose";

const productSchema = new Schema({
   organizationID: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   shortName: {
      type: String,
      required: true,
   },
   logo: {
      type: String,
      required: false,
   },
   favicon: {
      type: String,
      required: false,
   },
   foreColor: {
      type: String,
      required: true,
   },
   backColor: {
      type: String,
      required: true,
   },
   urlName: {
      type: String,
      required: true,
   },
   version: {
      type: String,
      required: false,
   },
});

export default model("Product", productSchema);
