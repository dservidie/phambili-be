import Feature from "./Feature";

export default {
   Mutation: {
      async createFeature(_, { featureInput }) {
         const newFeature = new Feature(featureInput);
         await newFeature.save();
         return newFeature;
      },
      async deleteFeature(_, { _id }) {
         return await Feature.findByIdAndDelete(_id);
      },
      async updateFeature(_, { _id, featureInput }) {
         return await Feature.findByIdAndUpdate(_id, featureInput, { new: true });
      },

      async addComment(_, { commentInput }) {
         const newComment = new Feature(commentInput);
         await newComment.save();
         return newComment;
      },
   },
};
