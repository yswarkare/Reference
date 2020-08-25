    $("#titleBtn").click(function(e){
        e.preventDefault();
        sTitle = $("#sTitle").val();
    })  

    $("#authorBtn").click(function(e){
        e.preventDefault();
        sAuthor = $("#sAuthor").val();
    })

    $("#languageBtn").click(function(e){
        e.preventDefault();
        sLanguage = $("#sLanguage").val();
    })

    $.ajax({
        type: 'GET',
        url: 'https://raw.githubusercontent.com/attainu-nightingale/nightingale-course-module/master/assignments/data/books.json',
        dataType: 'json',
        
        success: function (data) {
            booksArray = data;

            for (var i=0; i < booksArray.length; i++){
                if (booksArray[i].language.toLowerCase() == sTitle){

                    $("#rTable").append("<tr>" + "<td>"+booksArray[i].title+"</td>" + "<td>"+booksArray[i].author+"</td>" + "<td>"+booksArray[i].country+"</td>" + "<td>"+booksArray[i].language+"</td>" + "<td>"+booksArray[i].link+"</td>" + "<td>"+booksArray[i].pages+"</td>" + "<td>"+booksArray[i].year+"</td>" + "</tr>");
                }
                if (booksArray[i].language.toLowerCase() == sAuthor){

                    $("#rTable").append("<tr>" + "<td>"+booksArray[i].title+"</td>" + "<td>"+booksArray[i].author+"</td>" + "<td>"+booksArray[i].country+"</td>" + "<td>"+booksArray[i].language+"</td>" + "<td>"+booksArray[i].link+"</td>" + "<td>"+booksArray[i].pages+"</td>" + "<td>"+booksArray[i].year+"</td>" + "</tr>");
                }
                if (booksArray[i].language.toLowerCase() == sLanguage){

                    $("#rTable").append("<tr>" + "<td>"+booksArray[i].title+"</td>" + "<td>"+booksArray[i].author+"</td>" + "<td>"+booksArray[i].country+"</td>" + "<td>"+booksArray[i].language+"</td>" + "<td>"+booksArray[i].link+"</td>" + "<td>"+booksArray[i].pages+"</td>" + "<td>"+booksArray[i].year+"</td>" + "</tr>");
                }
            }
            console.log(booksArray[i]);
        },

        error: function (error) {
            console.log("Some error occured");
            alert("Some error occured");
        }
    })

