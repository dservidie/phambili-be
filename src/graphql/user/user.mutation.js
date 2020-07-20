import User from "../../models/User";

export default {
   Mutation: {
      async createUser(_, { userInput }) {
         console.log("createUser: ");
         console.log(userInput);
         const newUser = new User(userInput);
         await newUser.save();
         return newUser;
      },
      async deleteUser(_, { _id }) {
         return await User.findByIdAndDelete(_id);
      },
      async updateUser(_, { _id, userInput }) {
         return await User.findByIdAndUpdate(_id, userInput, { new: true });
      },
   },
};
