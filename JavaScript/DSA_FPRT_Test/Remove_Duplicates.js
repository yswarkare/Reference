/*
Given a sorted linked list, delete all duplicates such that each element appears only once.

Input Format

Space separated numbers denoting a linked list

Constraints

None

Output Format

Space separated numbers denoting the final linked list

Sample Input 0

1 1 2
Sample Output 0

1 2
*/

const removeDuplicates = (str) => {
    let array = str.split(" ").map((item)=>{
        return parseInt(item);
    })
    console.log(array);

    let str2 = "";

    let array2 = [];

    for (let i = 0; i < array.length; i++) {
        if (array2.indexOf(array[i]) === -1){
            array2.push(array[i]);
        }
    }
    console.log(array2)
    // console.log(array2)

    for (let i = 0; i < array2.length; i++) {
        str2 = str2.concat(" ", array2[i])
        // console.log(array2[i])
    }

    let str3 = str2.trim();
    console.log(str3)
    return str3

}

removeDuplicates("1 1 2 2 2 6 6 6");
removeDuplicates("1 1 2")