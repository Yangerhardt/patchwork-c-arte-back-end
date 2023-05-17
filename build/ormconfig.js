"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
};
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vb3JtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxNQUFNLEdBQXNCO0lBQ2hDLElBQUksRUFBRSxVQUFVO0lBQ2hCLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxJQUFJO0lBQ1YsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztJQUNqQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO0lBQ2pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7SUFDakMsV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQixVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztDQUNwQyxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvbk9wdGlvbnMgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcclxuXHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmNvbnN0IGNvbmZpZzogQ29ubmVjdGlvbk9wdGlvbnMgPSB7XHJcbiAgdHlwZTogXCJwb3N0Z3Jlc1wiLFxyXG4gIGhvc3Q6IFwibG9jYWxob3N0XCIsXHJcbiAgcG9ydDogNTQzMixcclxuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUk5BTUUsXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9EQVRBQkFTRSxcclxuICBzeW5jaHJvbml6ZTogdHJ1ZSxcclxuICBsb2dnaW5nOiB0cnVlLFxyXG4gIGVudGl0aWVzOiBbXCJzcmMvZW50aXRpZXMvKi50c1wiXSxcclxuICBtaWdyYXRpb25zOiBbXCJzcmMvbWlncmF0aW9ucy8qLnRzXCJdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iXX0=