var answer;
$.ajax({
    url:"https://raw.githubusercontent.com/attainu-nightingale/nightingale-course-module/master/assignments/data/quiz.json",
    datatrype: "json",
    success: function(data){
        data = JSON.parse(data);
        var index = Math.floor(Math.random() * data.length);
        $("#question").html(data[index].question);
        answer = data[index].answer;
    }
});

function checkAnswer(){
    if(
        $("#answer")
            .val()
            .toLowerCase() == answer.toLowerCase()
    )   {
        alert("Corret Answer");
        clearInterval(interva);
    }   else {
        alert("Wrong Answer");
    }
}

$("#submitBtn").on("click", checkAnswer);

var counter = 30;
var interval = setInterval(function(){
    counter--;
    if (counter >= 0) {
        $("#timer").html(counter);
    }
    if (counter === 0) {
        alert("Time is over!");
        $("#submitBtn").attr("disabled", true);
        clearInterval(interval);
    }
}, 1000);

function nextQues() {
    location.reload();
}

$("#next").on("click", nextQues);