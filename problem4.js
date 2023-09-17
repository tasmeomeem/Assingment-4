//  -----problem Number 4 -----  
function findAddress(Obj) {
    const obj = {
        street: 10,
        house: '15A',
        society: "Earth Perfect",
    };
    return `${obj.street}, ${obj.house}, ${obj.society}`;
}

// const address = findAddress();
// console.log(address);



// Bonus part
function findAddress(Obj) {
    const obj = {
        street: 10,
        house: '15A',
        society: "Earth Perfect",
    };

    const address = {
        street: obj.street || '__',
        house: obj.house  !== undefined ? obj.street : '__',
        society: obj.society || '__',
    };

    return `${address.street}, ${address.house === '__' ? '__' : '_'}, ${address.society}`;
}

// const address = findAddress();
// console.log(address);


function findAddress(Obj) {
    const obj = {
        street: 10,
        house: '15A',
        society: "Earth Perfect",
    };

    const address = {
        street: obj.street || '__',
        house: obj.house !== undefined ? obj.house : '__',
        society: obj.society !== undefined ? obj.society : '__',
    };

    return `${address.street}, ${address.house === '__' ? '__' : '_'}, ${address.society === '__' ? '__' : '_'}}`;
}

// const address = findAddress();
// console.log(address);
