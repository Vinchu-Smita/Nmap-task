var mongoose =require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    prName : String,
    prPrice : String,
    prDiscount : Number,
    prCatid : String,
    filepath: String, 
    prDescription : String,


});
//db.createCollection("user_products");
//const userModel = mongoose.model('db collection name',userShema);

const productModel = mongoose.model('user_products', productSchema);

module.exports =productModel;