/*
John
Alexis

*/

// let firstPersonName = "Muhammad Enamul Haque";
// let secondPersonName = "Salma Enam";

// let myNameLength = firstPersonName.length;
// let wifeNameLength = secondPersonName.length;

// if(myNameLength > wifeNameLength){
//     console.log(firstPersonName);
// }else{
//     console.log(secondPersonName);
// }

// let firstPersonName = "Muhammad Enamul Haque";
// let secondPersonName = "Salma Enam";

// console.log(firstPersonName.length);
// console.log(firstPersonName.length);

// let myNameLength = firstPersonName.length;
// let myWifeNameLength = secondPersonName.length;

// if (myNameLength > myWifeNameLength) {
//     console.log(firstPersonName.split("").reverse().join(""));
// } else {
//     console.log(secondPersonName.split("").reverse().join(""));
// }

function reverseName(firstPersonName, secondPersonName) {
    
    // let firstPersonName = "Muhammad Enamul Haque";
    // let secondPersonName = "Salma Enam";

    // console.log(firstPersonName.length);
    // console.log(firstPersonName.length);

    let myNameLength = firstPersonName.length;
    let myWifeNameLength = secondPersonName.length;

    if (myNameLength > myWifeNameLength) {
        return firstPersonName.split("").reverse().join("");
    } else {
        return secondPersonName.split("").reverse().join("");
    }
     
}

const result = reverseName("Muhammad Enamul Haque","Salma Enam");
console.log(result);




