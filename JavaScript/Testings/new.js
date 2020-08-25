// const func_01 = (inputs) => {
//     let str_01 = inputs[0];
//     let str_02, str_03, str_04, str_05;
//     let common = [];
//     let sum = 0;
//     for (let i = 0; i < str_01.length; i++) {
//         str_02 = str_01.substring(0, i);
//         str_03 = str_01.substring(i);
//         console.log("str_02", str_02);
//         console.log("str_03", str_03);
//         for (let j = 1; j < str_02.length; j++) {
//             str_04 = str_02.substring(0, j);
//             if(str_03.includes(str_04)){
//                 common.push(str_04);
//             }
//         }
//         for (let j = 1; j < str_03.length; j++) {
//             str_05 = str_03.substring(0, j);
//             if(str_02.includes(str_05)){
//                 common.push(str_05);
//             }
//         }
//     }
//     console.log(common);
//     for (let i = 0; i < common.length; i++) {
//         sum = sum + common[i].length;
//         console.log(common[i].length)
//     }
//     console.log(sum);
// }

// func_01(["ababaa"]);

let samples = [[1,1,1],[1,1,0],[1,0,1]];

function largestArea(samples) {
    let result = [];
    let arr = [];
    
    for (let i = 0; i < samples.length; i++){
        for (let j = 0; j < samples[i].length; j++){
            if(samples[i][j] === 1){
                arr.push(samples[i][j]);
            }
        }
        result.push(arr);
        arr = [];
    }
    let len = result.length;
    for (let i = 0; i < result.length; i++) {
        if ( len > result[i].length) {
            len = result[i].length;
        }
    }
    
    console.log(len);
    return len;
}

largestArea(samples);