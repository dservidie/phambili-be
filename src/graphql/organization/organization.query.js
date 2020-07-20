import Organization from "./Organization";

export default {
   Query: {
      async Organizations() {
         const organizations = await Organization.find();
         return organizations;
      },
   },
};
