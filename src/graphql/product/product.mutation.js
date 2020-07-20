import Product from "./Product";

export default {
   Mutation: {
      async createProduct(_, { productInput }) {
         console.log("createProduct: ");
         console.log(productInput);
         const newProduct = new Product(productInput);
         await newProduct.save();
         return newProduct;
      },
      async deleteProduct(_, { _id }) {
         return await Product.findByIdAndDelete(_id);
      },
      async updateProduct(_, { _id, productInput }) {
         return await Product.findByIdAndUpdate(_id, productInput, { new: true });
      },
   },
};
