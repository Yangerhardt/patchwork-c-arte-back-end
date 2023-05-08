"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = require("./routes/user"); // Exemplo de rota
const ormcofig_1 = __importDefault(require("../ormcofig"));
const cors_1 = __importDefault(require("cors"));
// Carrega as variáveis de ambiente do arquivo .env
dotenv_1.default.config();
// Cria uma instância do aplicativo Express
const app = (0, express_1.default)();
// Configurações do Express
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// Rota de exemplo
app.use("/users", user_1.userRouter);
// Função para iniciar o servidor
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Conecta ao banco de dados usando o TypeORM
            yield (0, typeorm_1.createConnection)(ormcofig_1.default);
            // Inicia o servidor
            const port = process.env.PORT || 4000;
            app.listen(port, () => {
                console.log(`Server starting at port ${port}`);
            });
        }
        catch (error) {
            console.error("Error conecting to server: ", error);
        }
    });
}
// Inicia o servidor
startServer();
