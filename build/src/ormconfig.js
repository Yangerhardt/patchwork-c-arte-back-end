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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29ybWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sTUFBTSxHQUFzQjtJQUNoQyxJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsV0FBVztJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7SUFDakMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztJQUNqQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO0lBQ2pDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsUUFBUSxFQUFFLENBQUMsbUJBQW1CLENBQUM7SUFDL0IsVUFBVSxFQUFFLENBQUMscUJBQXFCLENBQUM7Q0FDcEMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3Rpb25PcHRpb25zIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XHJcblxyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG5jb25zdCBjb25maWc6IENvbm5lY3Rpb25PcHRpb25zID0ge1xyXG4gIHR5cGU6IFwicG9zdGdyZXNcIixcclxuICBob3N0OiBcImxvY2FsaG9zdFwiLFxyXG4gIHBvcnQ6IDU0MzIsXHJcbiAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVJOQU1FLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfREFUQUJBU0UsXHJcbiAgc3luY2hyb25pemU6IHRydWUsXHJcbiAgbG9nZ2luZzogdHJ1ZSxcclxuICBlbnRpdGllczogW1wic3JjL2VudGl0aWVzLyoudHNcIl0sXHJcbiAgbWlncmF0aW9uczogW1wic3JjL21pZ3JhdGlvbnMvKi50c1wiXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIl19