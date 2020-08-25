/*function fact(){
    var x = prompt("enter a number");
    var y = 1;
    for(i = x; i>0; i--){
        y = y * i;
    }
    alert( x + '!' + ' ' + '=' + ' ' + y );
    console.log( x + '!' + ' ' + '=' + ' ' + y );
}

fact(); */

function factorial(n) {
    if (n == 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}