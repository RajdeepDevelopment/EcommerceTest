
const Brand = require('../Model/brand') 

const fetchAllBrands = async(req, res)=>{

try{
    const Brands = await Brand.find({});  
 
   res.json(Brands);
console.log("Brands send") }
catch(error){
console.log(error)
}
}
 const createBrand = async (req, res)=>{
 
   try{ const newBrand = new Brand(req.body);
    const  savedBrand = await newBrand.save();
     res.json(savedBrand); }
     catch (error){
     console.log("Getting error While crating new Brand Object"+ error)
     }
    
 }

   module.exports = [fetchAllBrands, createBrand];
   