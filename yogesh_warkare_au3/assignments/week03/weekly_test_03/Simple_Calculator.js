//  JS Calculator

//  Addition

plusButton = document.getElementById("plusButton");
plusOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    
    sum = parseInt(number1.value) + parseInt(number2.value);

    document.getElementById("result").value = sum;
    console.log(sum);
}

plusButton.addEventListener("click",plusOperation);


//  Substraction

minusButton = document.getElementById("minusButton");
minusOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    
    difference = parseInt(number1.value) - parseInt(number2.value);

    document.getElementById("result").value = difference;
    console.log(difference);
}

minusButton.addEventListener("click",minusOperation);


//  Multiplication

mulButton = document.getElementById("mulButton");
mulOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    
    multiplication = parseInt(number1.value) * parseInt(number2.value);

    document.getElementById("result").value = multiplication;
    console.log(multiplication);
}

mulButton.addEventListener("click",mulOperation);

//  Division

divButton = document.getElementById("divButton");
divOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    
    division = parseInt(number1.value) / parseInt(number2.value);

    document.getElementById("result").value = division;
    console.log(division);
}

divButton.addEventListener("click",divOperation);