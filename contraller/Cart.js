

const Carts = require('../Model/Cart');


 const  fetchCreateCart =  async (req, res)=>{
     try{ 
 const newCart = new Carts(req.body);
 const saveData = await newCart.save();
 res.json(saveData); 
 }
 catch (error){
 console.log(error);
 }
}
// reset cart contraller is pending
const fetchCartByid  = async (req,res)=>{
 const id = req.params.slug;
 const data = await Carts.find({userid: {$eq: id}});
 console.log(data);
 res.json(data)

}

const fetchAllCart = async (req,res)=>{
     let data = await Carts.find({});
      if(req.query.userid){
    data = data.filter((element)=> element.userid == req.query.userid )
      }
     
    res.json(data)
   
   }


   const updateCart = async(req, res)=>{
    try{
     const dataID = req.body;
     const newCartData = await Carts.findOneAndUpdate({_id: dataID._id}, {$set: dataID}, {new:true});
     res.json(newCartData);
    }

    catch(error){
   res.status(404).json(error)
    }


   }


   const removeCart = async (req, res) => {
    try {
      const deletedProduct = await Carts.findByIdAndDelete(req.params.slug, { new: true });
  
      if (!deletedProduct) {
        console.log("Product not found. ID:", req.params.slug);
        return res.status(404).json({ error: 'Product not found.' });
      }
  
      console.log("Product deleted:", deletedProduct);
      res.status(200).json(deletedProduct);
    } catch (err) {
      console.error("Error deleting product:", err);
      res.status(500).json({ error: 'An error occurred while deleting the product.' });
    }
  };
  
  

   module.exports = [fetchCreateCart, fetchCartByid, fetchAllCart,updateCart, removeCart];