var validator =require('validator');
var check_alpha_charter = function(category){
    if(validator.isEmpty(category)){
        return true;
    }
    else{
        return false;
    }

}

var productName_function = function(productname){
    
    if(validator.isEmpty(productname) ||  !validator.isAlpha(productname,'en-IN')){
        return true;
    }
    else{
        return false;
    }
}

var productPrice_function = function(productprice){
    
    if(validator.isEmpty(productprice) || !validator.isAlphanumeric(productprice,'en-IN') || !validator.isLength(productprice , {min:2,max:5})){
        return true;
    }
    else{
        return false;
    }
}
var productDiscount_function = function(productdiscount){
    if(validator.isEmpty(productdiscount) || !validator.isAlphanumeric(productdiscount,'en-IN') || !validator.isLength(productdiscount , {min:1,max:2})){

    }
    else{
        return false;
    }
}
var productCategory_function = function(productcategory){
    
    if(validator.isEmpty(productcategory)){
        return true;
    }
    else{
        return false;
    }
}
// var productImage_function = function(productimage){
    
//     if(validator.isEmpty(productimage)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
    

module.exports ={
    check_alpha_charter,
    productName_function,
    productPrice_function,
    productDiscount_function,
    productCategory_function,
    // productImage_function
    
}