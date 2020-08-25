function charIncr(){
    string = prompt("Enter a strting");
    newStr = "";
    letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (i=0; i<string.length; i++){
        char = string.charAt(i);

        if( char == "z"){
            newStr = newStr + "a";          
        } else
        if ( char == "Z"){
            newStr = newStr + "A";
        } else 
        if( char == " "){
            newStr = newStr + " ";
        } 
        else {
            newStr = newStr + letters.charAt(letters.indexOf(char) + 1);
        }
    }
    console.log(newStr);
}

charIncr();