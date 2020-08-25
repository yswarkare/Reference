$("#btnSubmit").on("click", function() {
    sData = {
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
            data = sData;
            console.log(data);
        }
    });
    window.location.replace("/students");
});