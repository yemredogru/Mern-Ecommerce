const mongoose = require('mongoose');
const schema = mongoose.Schema({
    comment:String,
    product_id:{type:mongoose.Types.ObjectId,ref:'Product'},
    comment_date:{
        type:Date,
        default:Date.now()
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
})
const Reviews = mongoose.model('Reviews',schema);
module.exports = Reviews