"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const winston_1 = __importDefault(require("winston"));
// Configuração básica do logger usando winston
const logger = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.simple(),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: "logs.log" }),
    ],
});
// Inicie o servidor
const port = Number(process.env.PORT || 4000);
server_1.default.listen(port, () => {
    logger.info("Express server started on port: " + port);
});
server_1.default.get("/", (req, res) => {
    res.send("Hello World!");
});
