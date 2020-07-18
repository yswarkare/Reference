var array = ["Cat", "Dog", "Elephant", "Fish", "Gorilla", "Monkey", "Turtle", "Tiger", "Lion", "Whale", "Donkey", "Horse"];

var word = "do";

function search_animal(x, y) { 
    let input = y;
    input = input.toLowerCase()
    let sResult = []
    
    for (i = 0; i < x.length; i++) {  
        if (x[i].toLowerCase().includes(input)) {
            sResult.push(x[i]);
        }
    }
    if (sResult[0] === undefined) {
        return console.log("Doesn't Exists");
    } else {
        return console.log(sResult);
    }
}

search_animal(array, word);