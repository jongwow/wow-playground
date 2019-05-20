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
                    let appStr=`<tr><td>${todo.prior}</td><td>${todo.title}</td><td>${todo.content}</td>`;
                    appStr += `<td>없음</td><td>${todo.check}</td>`;
                    appStr += `<td><button id="todoUpdBtn(${todo.id})" class="btn btn-danger btn-put" data-id="${todo.id}">수정</button></td>`;
                    appStr += `<td><button id="todoDelBtn(${todo.id})" class="btn btn-danger btn-delete" data-id="${todo.id}">삭제</button></td>`;
                    appStr += `</tr>`;
                    $(appStr).appendTo("#todoList");                    
                }
                else{
                    let appStr=``;
                    appStr += `<tr><td>${todo.prior}</td><td>${todo.title}</td>`;
                    appStr += `<td>${todo.content}</td>`;
                    appStr += `<td><input type="date" class="form-control" name="showDueDate" id="showDueDate(${todo.id})" value="`;
                    appStr += formatDate(todo.duedate);
                    appStr += `" disabled></td><td>${todo.check}</td>`;
                    appStr += `<td><button id="todoUpdBtn(${todo.id})" class="btn btn-danger btn-put" data-id="${todo.id}">수정</button></td>`;
                    appStr += `<td><button id="todoDelBtn(${todo.id}`;
                    appStr += `)"class="btn btn-danger btn-delete" data-id="${todo.id}">삭제</button></td>`;
                    appStr += `</tr>`;
                    $(appStr).appendTo("#todoList");
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