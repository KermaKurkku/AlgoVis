"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const lists_1 = __importDefault(require("./routes/lists"));
const app = express_1.default();
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.static('build_frontend'));
const PORT = process.env.PORT || 3001;
app.get('/api/ping', (_req, res) => {
    console.log('pinged');
    res.send('pong');
});
app.use('/api/list', lists_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
