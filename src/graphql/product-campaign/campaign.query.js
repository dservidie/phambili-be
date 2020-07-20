import Campaign from "./Campaign";

export default {
   Query: {
      async Campaigns() {
         const campaigns = await Campaign.find();
         return campaigns;
      },
   },
};
