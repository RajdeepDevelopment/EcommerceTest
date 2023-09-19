
 const Products = require('../Model/product');

 const fetchAllProducts = async (req, res) => {
  try {
    let productQuery = Products.find({});

    // Filter by category
   // Filter by category
   if (req.query.category) {
    productQuery = productQuery.where('category').equals(req.query.category);
  }
  


    // Filter by brand
    if (req.query.brand) {
      productQuery = productQuery.where('brand').equals(req.query.brand);
      console.log("brand..................")
 console.log(productQuery)
    }

    // Sort
    if (req.query._sort && req.query._order) {
      const sortField = req.query._sort;
      console.log(sortField);
      const sortOrder = (req.query._order === 'desc') ? -1 : 1;
      productQuery = productQuery.sort({[sortField]: sortOrder });
    }
   
    // Pagination
    if (req.query._page && req.query._limit) {
      const pageSize = parseInt(req.query._limit);
      const page = parseInt(req.query._page);
      const skip = (page - 1) * pageSize;
      productQuery = productQuery.skip(skip).limit(pageSize);
    }

    const products = await productQuery.exec();
    res.json(products);
    console.log("Products sent");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
};

 const fetchProductsByid = async(req,res)=>{
    const id = req.params.slug;

   const product2 = await Products.find({_id: {$eq: id}});
   res.json(product2); 
}


const DeleteProduct = async (req, res) => {
   try {
     const id = req.params.slug;
 

     const result = await Products.deleteOne({ _id: id });
 
     if (result.deletedCount === 0) {
       return res.status(404).json({ error: 'Product not found.' });
     }
 
     res.json({ message: 'Product deleted successfully.'});
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'An error occurred while deleting the product.' });
   }
 };


 const updateQuantityProduct = async (req, res) => {
  const updateData = req.body;
 console.log("updateData")
 console.log(updateData)
 console.log("updateData")
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      updateData._id, // Assuming `updateData.id` is the document ID
      { $set: updateData }, // Update data
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updatedProduct);
    console.log("Check Function");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const fetchCreateProduct = async(req, res)=>{
try{
 const newProduct =  new Products(req.body);
 const saveProduct = await newProduct.save();
 res.json(saveProduct);
 console.log("Product SuccessFully Created")
}
catch(error){
  res.json("Create Product Failed"+ error)
  console.log("Product Createtion failed"+ error)

}

}
module.exports = [fetchAllProducts, fetchProductsByid, DeleteProduct, updateQuantityProduct, fetchCreateProduct ];

