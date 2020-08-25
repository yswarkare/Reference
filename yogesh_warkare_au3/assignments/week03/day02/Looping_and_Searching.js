function searcharray(){
    var a = prompt("enter array");
    var array=a.split("");
    var b = prompt("enter a number to search");
    for(var i=0; i<array.length; i++){
        if(array[i]==b){
            return i;
        }
    }
    return -1;
}

searcharray();