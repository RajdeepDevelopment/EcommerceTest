
const Orders =  require('../Model/order')
 const createOrder = async(req,res)=>{

    let newOrder = new Orders(req.body);
     saveData = await newOrder.save();
     res.json(saveData);

}


const fetchOrderByid = async(req,res)=>{
      let userid = req.params.slug;
     
     let getOder =await Orders.find( { "user.email" : userid })
     res.json(getOder);

}
const fetchAllOrder= async(req,res)=>{
 
   let AllOrder = await Orders.find({});
 
   res.json(AllOrder);

}

const fetUpdateOrders = async(req, res)=>{
const data = req.body;
 const id = req.body._id;
 try{
 const newOrder = await Orders.findByIdAndUpdate(id, {$set: data}, {new:true}) 
 

 res.json(newOrder);
 }
 
 catch(error){
   console.log("Error on Update the Order")
 }
}



module.exports = [createOrder, fetchOrderByid, fetchAllOrder, fetUpdateOrders];