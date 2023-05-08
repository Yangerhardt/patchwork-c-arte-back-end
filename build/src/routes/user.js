"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
// Rota GET /users
userRouter.get("/", (req, res) => {
    // Lógica para obter todos os usuários
    res.send("Obter todos os usuários");
});
// Rota GET /users/:id
userRouter.get("/:id", (req, res) => {
    const userId = req.params.id;
    // Lógica para obter um usuário específico com base no ID
    res.send(`Obter usuário com ID ${userId}`);
});
// Rota POST /users
userRouter.post("/", (req, res) => {
    // Lógica para criar um novo usuário
    const userData = req.body;
    res.send(`Criar novo usuário: ${JSON.stringify(userData)}`);
});
// Rota PUT /users/:id
userRouter.put("/:id", (req, res) => {
    const userId = req.params.id;
    // Lógica para atualizar um usuário específico com base no ID
    const updatedUserData = req.body;
    res.send(`Atualizar usuário com ID ${userId}: ${JSON.stringify(updatedUserData)}`);
});
// Rota DELETE /users/:id
userRouter.delete("/:id", (req, res) => {
    const userId = req.params.id;
    // Lógica para excluir um usuário específico com base no ID
    res.send(`Excluir usuário com ID ${userId}`);
});
