const express = require('express');
const multer = require('multer');
const path = require("path");
const Products = require('../Model/product');


const storage = multer.diskStorage({
destination: (req, file, cd)=>{
 cd(null,'Images')
},

filename: (req, file, cd)=>{
console.log(file);
cd(null, Date.now()+ ""+path.extname(file.originalname));
}
})
const upload = multer({storage: storage})

const  [fetchAllProducts, fetchProductsByid,DeleteProduct, updateQuantityProduct, fetchCreateProduct ]  = require('../contraller/products');
const router = express.Router();

router.get('/', fetchAllProducts).get( '/:slug',fetchProductsByid ).delete('/:slug', DeleteProduct).patch('/', updateQuantityProduct).post('/',fetchCreateProduct).post("/upload", upload.fields([
  { name: 'thumbnail', maxCount: 1 },
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 }
]), async (req, res) => {
  const fileLinks = [];
  try {
    console.log("try");

    // Iterate over the keys of the req.files object
    for (const fieldName of ['image1', 'image2', 'image3', 'image4']) {
      if (req.files[fieldName]) {
        const file = req.files[fieldName][0];
        fileLinks.push(`${req.protocol}://${req.get('host')}/Images/${file.filename}`);
      }
    }

    // Create a new product object using the req.body values
    const newProduct = new Products({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      discountPercentage: req.body.discountPercentage,
      rating: req.body.rating,
      stock: req.body.stock,
      brand: req.body.brand,
      category: req.body.category,
      thumbnail: `${req.protocol}://${req.get('host')}/Images/${req.files.thumbnail[0].filename}`,
      images: fileLinks,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
    console.log("Product Successfully Created");
  } catch (error) {
    console.error("File upload error:", error);
    res.status(500).json({ error: "File upload failed." });
  }
});

module.exports = router;


