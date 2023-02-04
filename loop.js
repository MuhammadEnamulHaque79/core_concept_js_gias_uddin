//for loop;

// for(let i = 1; i <= 10000; i++){
//     console.log("لاي الاها الله محمد رسول الله.");
    
// }

//while loop;

// let i = 1;
// while(i <= 10){
//     console.log("Sorry !!");
//     i++;
// }
    
//while loop;

// let n = 0;
// let x = 0;

// while (n < 3) {
//   n++;
//   x += n;
//   console.log(x);
// }

// var friends =["salam","rafiq","jabber","borkot"];
// for(var i = 0; i < friends.length; i++){
//     console.log(friends[i]);
   
// }
// var result = Array.isArray(friends);
// console.log(result);

//must be known well;
//loop;
//object;
//function;

// var human ={
//     name:'rahim',
//     age:25,
//     friends:["salam","rafiq","jabber","borkot"],
//     country:"Bangladesh",
//     isCompleted:true,
//     father:{
//         name:"Muhammad Abdul Jabber",
//         isAlive:false,
//         quality:{
//             isReligious:true,

//         }
        
//     }
// }
// console.log(human);
// console.log(human.name);
// console.log(human.friends);
// console.log(human.friends[3]);
// console.log(human.isCompleted);
// console.log(human.father);
// console.log(human.father.name);
// console.log(human.father.quality.isReligious);
//for loop inside in an array;

// for(var i= 0; i <human.friends.length; i++){
//     var element = human.friends[i];
//     console.log(element);
// }


//function;

function sum(number1,number2){
    
    var result = number1 + number2;
    return result;
}


var totalSum = sum(10,20);
console.log(totalSum);

function minus(num1,num2){
    var result = num1 - num2;
    return result;
}

 var totalMinus = minus(30,10);
 console.log(totalMinus);

 var total = totalSum + totalMinus;
 console.log(total);