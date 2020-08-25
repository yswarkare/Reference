$("#btnSubmit").on("click", function() {
    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        age: $("#age").val()
    }

    $.ajax({
        type: "POST",
        url: "/students/student",
        data: "data",
        dataType: "json",
        success: function(data) {
            console.log(data);
        }
    });
    window.location.replace("/students");
});