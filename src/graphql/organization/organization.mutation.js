import Organization from "./Organization";

export default {
   Mutation: {
      async createOrganization(_, { organizationInput }) {
         const newOrganization = new Organization(organizationInput);
         await newOrganization.save();
         return newOrganization;
      },
      async deleteOrganization(_, { _id }) {
         return await Organization.findByIdAndDelete(_id);
      },
      async updateOrganization(_, { _id, organizationInput }) {
         return await Organization.findByIdAndUpdate(_id, organizationInput, { new: true });
      },
   },
};
