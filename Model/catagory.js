const mongoose = require('mongoose');

const Catagory = new mongoose.Schema({

    value:{type:String,  unique: true  , require:true } ,
    label: {type:String,  unique: true , require:true } ,
    checked: {type:String  }

})

const Catagorys = mongoose.model('catagory', Catagory);
module.exports = Catagorys;