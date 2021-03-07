"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.post('/', (req, res) => {
    const body = req.body.algorithm;
    const fPath = path_1.default.resolve(`data/${body}.txt`);
    fs_1.default.readFile(fPath, 'utf8', (err, data) => {
        if (err) {
            console.log(err.stack);
        }
        else {
            console.log(body, 'found');
        }
        res.send(data);
    });
});
exports.default = router;
