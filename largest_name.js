// let myName = "Muhammad Enamul Haque";
// let myFriendName = "Dr. Sadek Ahmed";
// // console.log(myName);
// // console.log(myFriendName);
// let myNameLength = myName.length;
// let myFriendNameLength = myFriendName.length;

// if (myNameLength > myFriendNameLength) {
//     console.log(myName.split("").reverse().join(""));
// } else {
//     console.log(myFriendName.split("").reverse().join(""));
// }

function reverseName(myName,myFriendName) {

    let myNameLength = myName.length;
    let myFriendNameLength = myFriendName.length;

    if (myNameLength > myFriendNameLength) {
        return myName.split("").reverse().join("");
    } else {
        return myFriendName.split("").reverse().join("");
    }

}

let result = reverseName("Muhammad Enamul Haque", "Dr. Sakek Ahmed");
// console.log(result);

console.log(".....................");

let myName ="Muhammad Enamul Haque";
// console.log(myName);
for(let i = 0; i < myName.length; i++){
    // console.log(myName);
    let element = myName[i];
    console.log(element);
}
console.log("..................");
//alternative way to finding reverse name/string;
let myRealName ="Muhammad Enamul Haque";
let reversedString = "";
for(let i = myRealName.length - 1; i >= 0; i--){
    let element = myRealName[i];
    // console.log(element);
    reversedString = reversedString + element;
}

console.log(reversedString);