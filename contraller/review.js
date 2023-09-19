const Reviews = require('../Model/review');

const fetchReviewsByProductId = async (req, res)=>{

    try{
const id = req.params.slug;
  const getRewiew = await Reviews.find({productId: {$eq:id }});
res.json(getRewiew)
    }
    catch(error){
        console.log("Geting Error on Review Get");
        res.json("Geting Error on Review Get")
    }
}

const fetchSaveNewReview = async(req, res)=>{

    const newReview = new Reviews(req.body);
     const saveReview = await newReview.save();
    res.json(saveReview);

}

module.exports = [fetchReviewsByProductId, fetchSaveNewReview];