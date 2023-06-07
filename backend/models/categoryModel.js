const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title:{
        type:String
    },
    is_active:{
        type:Boolean,
        default:true
    },
    home_page_active:{
        type:Boolean,
        default:false
    },

    slug: { type: String, slug: "title", unique: true },
})
schema.pre("save", function(next) {
    this.slug = this.title.split(" ").join("-");
    next();
  });
const Category = mongoose.model('Category',schema);
module.exports = Category