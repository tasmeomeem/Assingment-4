//  -----problem Number 5 -----  
function canPay(changeArray, totalDue) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }

    if (sum >= totalDue) {
        console.log("true");
    } 
    else {
        console.log("false");
    }
}

// const changeArray = [1, 2, 5];
// const totalDue = 10;

canPay(changeArray, totalDue);

// Bonus part

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Change array is empty";
    }

    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }

    if (sum >= totalDue) {
        return "true";
    } else {
        return "false";
    }
}

const changeArray = [];
const totalDue = 10;

// const result = canPay(changeArray, totalDue);
// console.log(result);

