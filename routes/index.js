var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

module.exports = function(app) {
	 
    app.get('/', function(req, res) {
    	
    	mongoose.model('category').find(function(err, result){
    		console.log(result);
    		res.render("index",{"result":"success","data":result});
    	});
    	
    });
    
    
    app.get('/category/:id', function(req, res) {
    	
    	
    	mongoose.model('category').find({_id:req.params.id},function(err, result){
    		//console.log(result[0].products);
    		var products = result[0].products;
    		var data = {};
    		data.category = result;
    		if (products !== undefined) {
    			mongoose.model('product').find().where('_id').in(products).exec(function (err, records) {
    			    //make magic happen
    				//console.log(records);
    				data.products= records;
    				console.log(data);
    				res.render("category",{"data":data});
    			});
    		}
    	});
    	
    });
    
};
