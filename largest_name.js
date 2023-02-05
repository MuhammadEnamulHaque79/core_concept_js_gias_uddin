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
console.log(result);