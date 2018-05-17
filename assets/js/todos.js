// check off todos by clicking
$("#todolist").on('click', 'li', function(){
    $(this).toggleClass("completed");    
});

// click on X to delete todo
$("#todolist").on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// adding new element
$("input[type='text']").on('keypress', function(event){
    if(event.which !== 13){
        return;
    }

    var value = $(this).val();
    if(value === ""){
        return;
    }

    value = "<li><span><i class='fa fa-trash'></i></span> " + value + "</li>";
    $("#todolist").append(value);
    $(this).val("");
});

// fadeout or in the input box
$("h1 span").on('click', function(event) {
    $("input[type='text']").fadeToggle(500);
});