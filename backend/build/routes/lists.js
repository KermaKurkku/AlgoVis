"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listGeneratorService_1 = require("../services/listGeneratorService");
const utils_1 = require("../utils");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    console.log(req.query);
    const size = req.query.size;
    if (!utils_1.isNumber(size))
        res.send('Incorrect size of list');
    const listSize = Number(size) >= 250 ? 250 : Number(size);
    const list = listGeneratorService_1.listGenerator(listSize);
    res.send(list);
});
exports.default = router;
