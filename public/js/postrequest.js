$( document ).ready(function(){
    $("#todoForm").submit((evt) =>{
        evt.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var duedue = $("#duedate").val();
        if(duedue === "")
            duedue=null;
        var formData = {
            title: $("#title").val(),
            content: $("#content").val(),
            duedate: duedue,
            priority: $("#priority").val(),
        }

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function(todo){
                alert("SUCCESS");
                $("<tr><td>" + todo.title + "</td></tr>").appendTo("#todoList");
            },
            error: function(e){
                alert("error");
                console.log("ERROR: ", e);
            }
        });
        resetData();
    }
    function resetData(){
        $("#title").val("");
        $("#content").val("");
        $("#duedate").val("");
        $("#priority").val("");
    }
})