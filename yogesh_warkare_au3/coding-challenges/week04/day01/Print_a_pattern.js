function print(m){
    var s = "";
    for(var i=1; i<=m; i++){
        s = s + '*';
    }
    console.log(s);
}

function pattern(n){
    var n = prompt("Enter a number");
    var m=0;
    for(var i=0; i<= (2 * n); i++){
        if(i<=n){
            m++
            print(m)
        } else{
            m--
            print(m)
        }
    }
}

pattern();