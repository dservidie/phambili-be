import Campaign from "./Campaign";

export default {
   Mutation: {
      async createCampaign(_, { campaignInput }) {
         const newCampaign = new Campaign(campaignInput);
         await newCampaign.save();
         return newCampaign;
      },
      async deleteCampaign(_, { _id }) {
         return await Campaign.findByIdAndDelete(_id);
      },
      async updateCampaign(_, { _id, campaignInput }) {
         return await Campaign.findByIdAndUpdate(_id, campaignInput, { new: true });
      },
   },
};
