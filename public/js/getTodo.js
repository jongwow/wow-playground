function toggleDate(){
    
    if($("#duedateCheck").prop("checked")){
        console.log("DueDate UNLOCKED");
        $("#duedate").attr("readonly",false);
    }
    else{
        console.log("DueDate LOCKED");
        $("#duedate").attr("readonly",true);
    }
};
function testTodo(){
    var con= "";
    con += $("#title").val() + ", ";
    con += $("#content").val() + ", ";
    if($("#duedate").val() === "")
        con += "NULL" + ", ";
    else
        con += $("#duedate").val() + ", ";
    con += $("#priority").val() + ". ";
    console.log(con);
};