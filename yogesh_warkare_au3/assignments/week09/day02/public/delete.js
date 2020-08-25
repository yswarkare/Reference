$("#btnSubmit").on("click", function() {
    var data = {
        id: $("#btnDelete").val(),
    }

    $.ajax({
        type: "POST",
        url: "/students/student",
        data: "data",
        dataType: "json",
        success: function(data) {
            console.log();
        }
    });
    window.location.replace("/students");
});