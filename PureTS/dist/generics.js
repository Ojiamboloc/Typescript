"use strict";
//const score:Array<number>=[]
//const names:Array<string>=[]
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//identityThree(true)
function identityFour(val) {
    return val;
}
//identityFour<Bottle>({})
function getSearchProducs(products) {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
