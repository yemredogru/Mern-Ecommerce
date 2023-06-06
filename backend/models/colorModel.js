const mongoose = require('mongoose');
const schema = mongoose.Schema({
    color_code:{type:String}
})
const Color = mongoose.model('Color',schema);
module.exports = Color