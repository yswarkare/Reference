function comparearrays(){
    var a = prompt("Enter An Array");
    var b = prompt("Enter Another Array");
    if((a.length) !== (b.length)){
        alert("Arrays Dosen't Match");
    }
    else{
        for(var i=0; i<a.length; i++){
            if(a[i] !== b[i]){
                alert("Arrays Dosen't Match");
                alert("Arrays Match");
            }
        }
    } 
}

comparearrays();