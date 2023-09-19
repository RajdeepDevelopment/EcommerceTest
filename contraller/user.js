const User = require('../Model/user'); 

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error   ) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

// Fetch user by user ID
const fetchUserById = async (req, res) => {
  const emailId = req.params.id;
  const queryid = req.query.email;
 
  try {
    const user = await User.findOne({ email: queryid});
    if (!user) {
      console.log("User not found")
      return res.status(404).json({ error: 'User not found.' });
    }
    console.log(user)
    res.status(201).json(user);

  } catch (error) {
    console.log("Error")
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
};
const fetchUserById2 = async (req, res) => {
  const userid = req.params.slug;
  

  try {
    const user = await User.findOne({_id: userid});
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
};
// Fetch all users
const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching all users.' });
  }
};
const updateUserAddress = async (req, res)=>{
 try {  const userId = req.params.slug; // from the request parameters
  const updateData = req.body; // extract the update data from the request body
 
  const updatedUser = await User.findByIdAndUpdate(userId, {$set: {addresses: updateData.addresses}}, {new: true});
    if (!updateData){
        return res.status(404).json({ error: 'User not found.' });
    }
    res.json(updatedUser );

}

 catch(err){
    console.error(err);
    res.status(500).json({ err: 'An error occurred while updating user addresses.' });
 }

}

module.exports = [createUser, fetchUserById, fetchAllUsers, updateUserAddress, fetchUserById2];
