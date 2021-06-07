$(function(){
    var SERVERPATH = window.location.origin;
    $(".btn_add").click(function(){
        // alert();
          // var record =$("#addform").serialize();
        // // alert(1);
        $.ajax({
            type:"post",
            data:$("#adduser").serialize(),
            url:SERVERPATH+"/add-user",
            success:function(response_from_node){
                console.log(response_from_node)
                
                $("#err_1").html(response_from_node['msg1'])
                $("#err_2").html(response_from_node['msg2'])
                $("#err_3").html(response_from_node['msg3'])
                $("#err_4").html(response_from_node['msg4'])
               
                window.location.reload();
            }
        })
  
    })
})