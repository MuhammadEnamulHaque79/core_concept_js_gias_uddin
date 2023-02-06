// let fileName = "index.js";
// if (fileName === "index.js") {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

function isJavaScriptFile(fileName) {
    
    if (fileName.endsWith(".js")) {
        return true;
        // console.log("Yes, got js file");
    }
    else {
        return false;
        // console.log("sorry not found js file");
    }
}

let result = isJavaScriptFile("index.js");
console.log(result);