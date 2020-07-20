import User from "../../models/User";

export default {
   Query: {
      async Users() {
         const users = await User.find();
         return users;
      },
   },
};
