import Product from "./Product";

export default {
   Query: {
      async Products() {
         const products = await Product.find();
         return products;
      },
   },
};
