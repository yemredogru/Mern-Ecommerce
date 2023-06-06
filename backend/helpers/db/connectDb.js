const mongoose = require('mongoose');

module.exports = connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/ecommerce',{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => { console.log('connected') }).catch((err) => { console.log('err', err) })
}