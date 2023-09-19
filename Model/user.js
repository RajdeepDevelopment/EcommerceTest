const mongoose = require('mongoose');

const UserSchema = new  mongoose.Schema({
 
    email: String,
    password : String,
    Comfirmpassword: String,
    addresses: [{

        name: String,
        email : String,
        'street-address': String,
        city: String,
        region: String,
        'postal-code': String 
    }],
     id : Number,
});

const Users = mongoose.model('user', UserSchema);

module.exports = Users;