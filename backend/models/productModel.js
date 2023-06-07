const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title:{
        type:String
    },
    color:{
        type:mongoose.Types.ObjectId,
        ref:'Color'
    },
    price:{
        type:mongoose.Types.Decimal128
    },
    description:{
        type:String
    },
    sale:{
        type:Boolean,
        default:false
    },
    sale_rate:{
        type:mongoose.Types.Decimal128
    }
    ,
    stock_code:{
        type:String
    },
    new_product:{
        type:Boolean,
        default:false
    },
    is_active:{
        type:Boolean,
        default:true
    },
    img:[
        {
            link:{type:String}
        }
    ],
    slug: { type: String, slug: "title", unique: true },
})
schema.pre("save", function(next) {
    this.slug = this.name.split(" ").join("-");
    next();
  });

const Product = mongoose.model('Product',schema);
module.exports = Product