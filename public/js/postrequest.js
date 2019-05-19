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
                //alert("SUCCESS");
                resetData();
                if(todo.duedate === null){
                    $(`<tr><td>${todo.prior}</td><td>${todo.title}</td><td>${todo.content}</td><td>없음</td><td>${todo.check}</td></tr>`).appendTo("#todoList");
                }
                else{
                    $(`<tr><td>${todo.prior}</td><td>${todo.title}</td><td>${todo.content}</td><td><input type="date" class="form-control" name="showDueDate" id="showDueDate(${todo.id})" value="`+formatDate(todo.duedate)+`" disabled></td><td>${todo.check}</td></tr>`).appendTo("#todoList");
                }
            },
            error: function(res, error, br){ //error, Bad Request
                alert(br + " : " + res.responseJSON.msg);
            }
        });
        resetData();
    }
    function resetData(){
        $("#title").val("");
        $("#content").val("");
        $("#duedate").val("");
        $('#priority').val("0");
    }
})