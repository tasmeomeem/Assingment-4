//  -----problem Number 3 -----  
function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return 'please provide meaningful array';
    }

    return arr.sort(function(a, b) {
        return a - b;
    });

}

// const sortedArray = sortMaker([3, 1]);
// console.log(sortedArray);


// Bonus part
// ================================
function sortMaker(arr) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] < 0 ){
            return "invalid Input";
        }
    }
    
}

// const sortedArray = sortMaker([4, -2]);
// console.log(sortedArray);

// =================================

function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return "equal";
        }
    }
    
}

// const result = sortMaker([4, 4]);
// console.log(result);
