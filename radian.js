// 1rad × 180/π = 57.296°;

function radianToDegree(radian){
    const Pi = 3.14159;
    const degree = (radian*(180/Pi)).toFixed(2);
    // console.log(degree);
    return degree;
    
}

// const results = radianToDegree(10);
// console.log("ourExpectedResults :",results);

//you must submit just the function body !!