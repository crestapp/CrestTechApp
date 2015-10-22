// The category model

var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;



var skuSchema = new Schema({
	skuId: Number,
	displayable: Boolean,
	shortDescription: String,
	displayName: String
	
});

var productSchema = new Schema({
    _id: String,
    defaultParentCatId: Number,
    onSale: Boolean,
    navigable: Boolean,
    sku: [skuSchema],
    shortDescription: String
    
});

//called when mongoose.model is called
//third parameter is the collection
mongoose.model('product', productSchema, 'product');