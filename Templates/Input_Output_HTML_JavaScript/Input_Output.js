/* JQuery */

$(document).ready(function() {
    $('#btnIn').click(function() {
        var number = $('#inputNum').val();
        console.log('Given data is ' + number + ' and type of data is ' + typeof(number));
        //$("#result").append('<span>' + 'Given data is ' + number + ' and type of data is ' + typeof(number) + '</span>');
        $("#result").append('<span>' + number + '</span>' + '<br>');
    });
});



/* Vanilla JavaScript */ // must give function as value to onclick attribute of button
/*
function myFun() {
    number = document.getElementById("inputNum").value;
    console.log(number);
    num = parseFloat(number);
    console.log("number is " + number);
    console.log("num is " + num);
    document.getElementById('result').innerText = "this is " + number;
}*/