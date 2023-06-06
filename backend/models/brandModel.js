const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        name: String,
        slug: { type: "String", slug: "name", unique: true },
        color:{type:mongoose.Schema.Types.ObjectId,ref:'Color'}
    });
schema.pre("save", function(next) {
    this.slug = this.name.split(" ").join("-");
    next();
  });
const Brand = mongoose.model('Brand', schema);
module.exports=Brand