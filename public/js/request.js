$( document ).ready(function(){
    $('.btn-delete').on('click', (evt)=>{
        evt.preventDefault();
        const dId = $(evt.target).attr('data-id');
        console.log("ID: "+ dId);
        ajaxDelete(dId);
    });
    $('.btn-put').on('click', (evt)=>{
        evt.preventDefault();
        const dId = $(evt.target).attr('data-id');
        console.log("ID: "+ dId);
        ajaxUpdate(dId);
    });
    function ajaxDelete(dId){
        $.ajax({
            type: "DELETE",
            url:"/" + dId,
            success:function(res){
                alert("DELETED");
                console.log(JSON.stringify(res));
                $('#todoIdx_'+dId).fadeOut();
            },
            error:function(res,err,br){
                alert(br + " : " + res.responseJSON.msg);
                console.log(JSON.stringify(res));
            },
            
        });
    };
    function ajaxUpdate(dId){
        const formData = {
            title: $("#title_"+dId).val(),
            content: $("#content_"+dId).val(),
            duedate: $("#duedue_"+dId).val(),
            priority: $("#priority_"+dId).val(),//check 추가하기
        }
        $.ajax({
            type:"PUT",
            contentType: "application/json",
            url: "/"+dId,
            data: JSON.stringify(formData),
            success:function(res){
                alert("SUCCESS");
                windows.location('/');

            },
            error:function(res,err,br){
                alert(br + " : " + res.responseJSON.msg);
                console.log(JSON.stringify(res));
            },
        })
    }
})