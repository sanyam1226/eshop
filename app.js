 var express=require("express");
 var app=express();
 var bodyparser=require("body-parser");
 var cookieparser=require("cookie-parser");
 var session=require("express-session");
 var flash=require("express-flash");
 var upload=require("express-fileupload");

 app.set("view engine","ejs");
 app.set("views","view");

 // app.use(express.static(__dirname+"/public/";
 app.use(bodyparser());
 app.use(cookieparser());
 app.use(session({secret:"12qw"}));
 app.use(flash());
 app.use(upload());

 app.use(function(req, res, next){
	res.locals.session=req.session;
	next();
});

app.use(require("./controller/default"));

app.listen(process.env.PORT||2323,function(){

	console.log("server start(sanyam)");
});
