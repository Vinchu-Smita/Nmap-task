var mongoose =require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    catName : String
});
//db.createCollection("user-categories");
//const userModel = mongoose.model('db collection name',userShema);

const userModel = mongoose.model('user_categories', categorySchema);

module.exports =userModel;