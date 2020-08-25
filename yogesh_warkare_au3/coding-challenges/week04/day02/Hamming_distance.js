function hamming(str1, str2){
    str1= prompt("Enter first string");
    str2= prompt("Enter second string");
    var l1 = str1.length;
    var l2 = str2.length;
    var d=0
    if(l1 !== l2){
        alert("strings aren't of equal length.");
    } else {
        for(var i=0; i<l1; i++){
            if(str1.charAt(i).toLowerCase() !== str2.charAt(i).toLowerCase()){
                d++
            }
        }
        alert(d);
    }
}

hamming();