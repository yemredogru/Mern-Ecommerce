const mongoose = require('mongoose');
const schema = mongoose.Schema({
    color_code:{type:String}
})
const Product = mongoose.model('Product',schema);
module.exports = Product