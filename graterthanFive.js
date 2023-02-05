/**
 
 */

// let num = 4;
// if(num > 5){
//     console.log("YES");
// }else{
//     console.log("Nooooooooooooo");
// }

// * [-1, -2, -3, -4, -5, 6, 7, 8, -9, -10];

// let numbers = [-1, -2, -3, -4, -5, 6, 7, 8, -9, -10];
// let count = 0;

// for(let i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     // console.log(element);
//     if(element > 5){
//         // console.log("YES PICH");
//         count = count + 1;
        
//     }
//     else{
//         // console.log("Noooooooo");
//     }
// }

// console.log(count);

let numbers = [-1, -2, -3, -4, -5, 6, 7, 8, -9, -10];

function greaterThanFive(){
    let count = 0;
   for(let i = 0; i <numbers.length; i++){
        const element = numbers[i];
        // console.log(element);
        if(element > 5){
            count++;
            // count += 1;
            // count = count + 1;
            console.log("Those numbers are > 5 :", element);
        }else{
            continue;
        }
   }
   return count;
}

const output = greaterThanFive(numbers);
console.log(output);