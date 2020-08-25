function nameinitials() {
    name=prompt("Enter name");
    var initials = name.charAt(0);
    for(var i=0; i<=name.length; i++){
    if(name.charAt(i)==" "){
        initials=initials+(name.charAt(i+1))
    }
    }
    alert(initials);
}

nameinitials();