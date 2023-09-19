  const mongoose = require('mongoose');

  const ModelSize = new mongoose.Schema({


    value: String,
    label: String,
    checked: Boolean

  })

  const Sizes = mongoose.model('size', ModelSize);

  module.exports = Sizes;