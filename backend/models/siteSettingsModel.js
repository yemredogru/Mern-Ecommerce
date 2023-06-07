const mongoose = require('mongoose');
const schema = mongoose.Schema({
    slider:{
        type:Array
    },
    working_days:{
        type:String
    },
    working_hours:{
        type:String
    },
    social_media:{
        type:Array
    },
    
})
const SiteSettings = mongoose.model('SiteSettings',schema);
module.exports = SiteSettings