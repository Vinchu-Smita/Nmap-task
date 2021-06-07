$(function(){
    var SERVERPATH = window.location.origin;
    
/*******category form*******/
$(".add_cat").click(function(){
    // alert()
    var record = $("#categoryForm").serialize();
    // alert(record);
    $.ajax({
        type:"POST",
        data:record,
        url:SERVERPATH+"/category-action",
        success:function(res){
            console.log("in browser");
            console.log(res);
            $("#errMsg").html(res['msg']) 
            
          }
    })
})
/*******category form*******/ 
/******product form*******/
$(".btn-product").click(function(){
    // alert()
    var objform = document.getElementById('productForm');    
    var contentObj = new FormData(objform);
    $.ajax({
        type:"POST",
        data:contentObj,
        contentType:false,
        processData:false,
        url:SERVERPATH +"/product-action",
        success:function(res){
            console.log("in browser");
            console.log(res);
            $("#errMsg1").html(res['msg1'])      
            $("#errMsg2").html(res['msg2'])      
            $("#errMsg3").html(res['msg3'])      
            $("#errMsg4").html(res['msg4'])      
            // $("#errMsg5").html(res['msg'])      
            $("#errMsg6").html(res['msg6'])      

        }
    })
})
/******product form*******/
/******product edit form*******/

$(".btn-edit").click(function(){
    // alert()
    var objform = document.getElementById('productEditForm');    
    var contentObj = new FormData(objform);
    $.ajax({
        type:"POST",
        data:contentObj,
        contentType:false,
        processData:false,
        url:SERVERPATH +"/edit",
        success:function(response){
            console.log("in browser");
            console.log(response);
            $("#errMsg").html(response['msg'])      


        }
    })
 })
/******product edit form*******/

})