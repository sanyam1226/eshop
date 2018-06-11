var express = require('express');
var router = express.Router();
var product = require("../model/product");
var category = require("../model/category");
var changename = require("../helper/changefilename");

var path = require('path');

router.get("/", function(req, res){
	category.find(function(err, result){
		var pagedata = {title : "Add Product", pagename : "admin/addproduct", message : req.flash("msg"), catedata : result};
	res.render("adminlayout", pagedata);
	});
	
});
router.post("/", function(req, res){
	var file = req.files.image;
	var newname = changename(file.name);
	var filepath = path.resolve("public/productimage/"+newname);
	// console.log(x);
	file.mv(filepath, function(err){
		if(err){
			console.log(err);
			return;
		}
		req.body.image=newname;
	// console.log(req.body);
	product.insert(req.body, function(err, result){
		// console.log(result);
		req.flash("msg", "Product Add Successfuly");
		res.redirect("/admin/addproduct");
	});
});
});	

module.exports=router;