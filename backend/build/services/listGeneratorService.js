"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listGenerator = void 0;
// Recursively add a random number
const addNumber = (list, size) => {
    const rand = Math.floor(Math.random() * size + 1);
    // If number is already in a list, run the function again
    if (list.includes(rand)) {
        return addNumber(list, size);
    }
    return rand;
};
const listGenerator = (size) => {
    const list = [];
    console.log('generating list length of', size);
    // Create a list of a given size
    for (let i = 0; i < size; i++) {
        list.push(addNumber(list, size));
    }
    console.log('generated list', list);
    return list;
};
exports.listGenerator = listGenerator;
