import Feature from "./Feature";

export default {
   Query: {
      async Features() {
         const features = await Feature.find();
         return features;
      },
   },
};
