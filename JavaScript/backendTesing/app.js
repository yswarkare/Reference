// var timeLeft
// var timer_01
// const startTimer = (duration = 10, loops = 1) => {
//     timeLeft = duration;
//     timer_01 = setInterval(()=>{
//         timeLeft--;
//         // console.log(timeLeft);
//         return timeLeft;
//     }, 1000)
// }

// const resetTime = (seconds)=>{
//     timeLeft = seconds;
// }

// const stopTimer = () => {
//     clearInterval(timer_01);
// }

// startTimer(6);

// setInterval(()=>{
//     resetTime(6);
// }, 6000)

// setTimeout(()=> {
//     stopTimer();
// }, 30000)


// const calculateAge = (givenDate_01) => {

//     let givenDate_02 = givenDate_01.split("-");

//     let givenDate = `${givenDate_02[0]}/${givenDate_02[1]}/${givenDate_02[2]}`;

//     console.log("givenDate => " + givenDate);

//     let dateObject_01 = new Date(givenDate);
//     console.log("dateObject 1 => "+dateObject_01);
    
//     let currentDate = Date.now()
//     console.log("Current date => " + currentDate)
    
//     let dateObject_02 = new Date();
//     console.log("dateObject 2 => "+dateObject_02);
    
//     let ageInMiliSeconds = dateObject_02 - dateObject_01;
    
//     console.log("ageInMiliSeconds => " + ageInMiliSeconds);
    
//     let ageInYears = ageInMiliSeconds/(3600000*24*365);
//     let ageInDays = ageInMiliSeconds/(3600000*24);
//     let ageInHours = ageInMiliSeconds/3600000;
//     let ageInMinutes = ageInMiliSeconds/60000;
//     let ageInSeconds = ageInMiliSeconds/1000;

//     console.log(ageInYears)
//     return ageInYears;
// }

// calculateAge("10-10-1990");


// let arr = [10, 5, 3, 4, 3, 5, 6]

// const firstRepeatingElement = (arr) => {
//     let result;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 result = arr[i];
//                 break;
//             } else {
//                 continue
//             }
//         }
//     }
//     console.log(result);
//     return result;
// }

// firstRepeatingElement(arr);

// const fibonacci = (n) => {
//     let sum = [];
//     for (let i = 0; i < n; i++){
//         sum.push(i + (i+1))
//     }
//     console.log(sum);
//     return sum;
// }

// fibonacci(9);

// arrA = [1, 2, 3, 4, 5, 6]
// arrB = [9, 17 , 11 , 12, 8]

// const sortNAdd = (arrA, arrB) => {
//     let arrC = arrB.sort((a,b)=>{return a-b});
//     console.log(arrC);
//     for (let i = 0; i < arrC.length; i++) {
//         arrA.splice(3, 0, arrC[i]);
//     }
//     console.log(arrA);
//     return arrA;
// }

// sortNAdd(arrA, arrB);