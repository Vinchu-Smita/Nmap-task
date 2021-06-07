var validation= require("../middelware/validation")
var categoryM = require("../model/categoryModel");
var productM =require("../model/productModel");


var homepage= function(req,res){
    res.render("homepage")
}
var categorypage=function(req,res){
    res.render("categorypage");
}
var CategoryActionPage    =function(req,res){
       console.log(req.body)
       var category = req.body.catName;
//    console.log( validation.check_alpha_charter(cate));
if(validation.check_alpha_charter(category) ){
    res.send({msg:"invalid category name"})
}
else{
    const instance = new categoryM(req.body);
    // insert unique category name in collection
    instance.save(function (err) {
        if(err){
            console.log(err)
        }
        else{
            res.send({msg:"category added"})
        }
      });
}
}

var productpage=function(req,res){
    // var obj ={
    //        catName:"womens wear"
    //     }
   
    categoryM.find({}, function (err, docs) {
                // docs.forEach
                if(!err){
                    console.log(docs);
                }
                 res.render("productpage",{smita:docs});
})
}
 var ProductActionPage=function(req,res){
    console.log(req.body)
    req.body.filepath = req.file.filename
    // console.log(req.file);
    //  res.send({msg:"Action called"})
    if(validation.productName_function(req.body.prName) ){
        res.send({msg1:"invalid product name"})
    }
    else if(validation.productPrice_function(req.body.prPrice)){
        res.send({msg2:"invalid product price"})
    }
    else if(validation.productDiscount_function(req.body.prDiscount)){
        res.send({msg3:"invalid productdiscount "})
    }
    else if(validation.productCategory_function(req.body.prCatid)){
        res.send({msg4:"invalid productcategory name"})
       
    }
    // else if(validation.productImage_function(req.body.prImage)){
    //     res.send({msg5:"please Select Image"})
       
    // }
    else{
     const instance_product = new productM(req.body);
     // insert unique category name in collection
     instance_product.save(function (err) {
         if(err){
             console.log(err)
         }
         else
             res.send({msg6:"product added"})
         
       });
}
}
var productshowpage=function(req,res){
    productM.find().then(function(result){
        if(result.length>0){
            // console.log(result)
                productM.find({}).skip(0).limit(3).exec(function(err,data){
                    // res.render("productpage",{result:data})
                    res.render("productshowpage",{smita:result})

            
                })    
        }
    })

}
var Productpaginationpage =function(req,res){
    console.log(req.params)
    var pageno=req.params.pageno
    count=40
    perpage=3
    pages=Math.ceil(count/perpage)
    skipdata=perpage*pageno-perpage
    console.log(skipdata)

    productM.find({}).skip(skipdata).limit(perpage).exec(function(err,data){
    res.render("productshowpage",{smita:data})

     });
}
var deletepageuser=function(req,res){
    // console.log(req.params);
    productM.remove({_id:req.params.showuserId},function(err,doc){
        if(!err){
            res.redirect("/add-product")
        }
    })
}
var editpageuser=function(req,res){
    productM.find({_id:req.params.showuserId},function(err,docs){
        if(!err){
            console.log(docs)
            res.render("editpage",{data:docs[0]})
        
        }
    })
}
var editpage=function(req,res){
    console.log(req.body);
    console.log(req.file)
    var obj={
        prName: req.body.prName,
        prPrice:  req.body.prPrice,
        prDiscount :  req.body.prDiscount,
        prCatid :  req.body.prCatid,
        filepath:  req.body.prImage,
        prDescription : req.body.prDescription,
    }
    productM.update({ _id:req.body._id},obj,function(err,result){
        if(!err){
            console.log(result)
            res.send({msg:"product update"});        
        }
       else{
           console.log(err)
     }    
    })
    
        
 }




    module.exports={
        homepage,
        categorypage,
        CategoryActionPage,
        productpage,
        ProductActionPage,
        productshowpage,
        deletepageuser,
        editpageuser,
        editpage,
        Productpaginationpage,
    
    }