"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function providId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLocaleLowerCase();
}
