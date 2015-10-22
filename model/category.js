// The category model

var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var categorySchema = new Schema({
    _id: String,
    defaultParentCategory: String,
    displayName: String,
    navigable: Boolean,
    products: [String],
    
});

//called when mongoose.model is called
//third parameter is the collection
mongoose.model('category', categorySchema, 'category');