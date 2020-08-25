// Parameters extraction from URL "http://localhost:3000/add?num1=5&num2=3"

function paramsObj(url){

    var readKeys = false
    var readValues = false
    var keyStart, KeyEnd
    var valueStart, valueEnd
    var valuesArray = []
    var keysArray = []
    var paramsObj = {}

    for (let i = 0; i < url.length; i++){
        var char = url[i];    // starting the current character

        // checking for keys
        if(char == "?" || char == "&" || readKeys == true){
            if(readkeys == false){  // key starts
                readKeys = true
                keyStart = i + 1 
            }
            if(char == "="){    // key ends
                keyEnd = i 
                keysArray.push( url.substring(keyStart, keyEnd) )
                readKeys == false
            }
        }

        // checking for values
        if(char == "=" || readValues == true){
            if(readValues == false){  // value starts
                readValues = true
                valueStart = i + 1 
            }
            if(char == "&"){    // key ends
                valueEnd = i
                valuesArray.push( url.substring(valueStart, valueEnd) )
                readvalues = false
            } else if(i == url.length - 1){
                valueEnd = i
                valuesArray.push( url.substring(valueStart, valueEnd) )
                readvalues = false
            }
        }
    }

    for(var i=0; i < keysArray.length; i++){
        paramsObj[keysArray[i]] = valuesArray[i]    // cresting the object
    }

    return paramsObj

}

console.log(params("http://localhost:3000/add?num1=5&num2=3"))
