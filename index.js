// javascript identifiers can be any character
// we now support completions with special characters, including bracketing the completion

let Customer = {
    'first name': 'chris',
    'last name': 'dias',
    'hair color': 'dark brown (no signs of grey)',
    'age': 27,
}


// can also define types using TS style syntax in JSDoc comments

/**
 * @typedef {{'order id': number, 'order items': number[]}} Order
 */

/** @type {Order} */
let o = {
    
};


// can get crazy too...

let e = {
    ''
}




