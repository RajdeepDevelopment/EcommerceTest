const Catagorys = require('../Model/catagory');

const fetchAllCatagory = async (req, res) => {
  try {
    const Catagory = await Catagorys.find({});
    res.json(Catagory);
    console.log("Catagory send");
  } catch (error) {
    console.log(error);
  }
};

const createCatagory = async (req, res) => {
  try {
    const newCatagory = new Catagorys(req.body);
    const savedCatagory = await newCatagory.save();
    res.json(savedCatagory);
  } catch (error) {
    console.log("Getting error while creating new Catagory Object");
  }
};

module.exports = [fetchAllCatagory, createCatagory];
