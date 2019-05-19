$( document ).ready(function(){
    $('.btn-delete').on('click', (evt)=>{
        evt.preventDefault();
        const dId = $(evt.target).attr('data-id');
        console.log("ID: "+ dId);
        ajaxDelete(dId);
    });
    function ajaxDelete(dId){
        $.ajax({
            type: "DELETE",
            url:"/" + dId,
            success:function(res){
                alert("DELETED");
                console.log(JSON.stringify(res));
                $("#todoIdx\("+(dId)+"\)").fadeOut();
            },
            error:function(res,err,br){
                alert(br + " : " + res.responseJSON.msg);
                console.log(JSON.stringify(res));
            },
            
        });
    };
})