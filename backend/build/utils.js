"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const isNumber = (value) => {
    if (isNaN(value))
        return false;
    return true;
};
exports.isNumber = isNumber;
