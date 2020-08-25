function pangram(){
    string = prompt("Enter a string to compare");
    str = string.toLowerCase();
    var start = "a";
    var end = "z";
    var aCode = start.charCodeAt();
    var zCode = end.charCodeAt();
    var miss = "";

    for(i=aCode; i<=zCode; i++){
        var char = String.fromCharCode(i);
        if(str.indexOf(char) == -1){
            miss = miss + " " + char;
        }
    }
    console.log(miss);
}

pangram();