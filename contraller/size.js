
const Sizes = require('../Model/size') 

const fetchAllSizes = async(req, res)=>{

try{
    const Size = await Sizes.find({});  
  
   res.json(Size);
console.log("Sizes send") }
catch(error){
console.log(error)
}
}
 const createSizes = async (req, res)=>{
 
   try{ const newSize = new Sizes(req.body);
    const  savedSizes = await newSize.save();
     res.json(savedSizes); }
     catch (error){
     console.log("Getting error While crating new Brand Object"+ error)
     }
    
 }

   module.exports = [fetchAllSizes, createSizes];
   