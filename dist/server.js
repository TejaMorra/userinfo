"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ApiRouting_1 = require("./ApiRouting");
const sequelize_1 = require("./config/sequelize");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
sequelize_1.sequelize.setConnection();
require("dotenv").config();
const app = express_1.default();
const port = process.env.PORT || 5000;
const corsOption = {
    credentials: true,
    exposedHeaders: ["x-auth-token"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: true,
};
function configureMiddleWare() {
    app.use(cors_1.default(corsOption));
    app.use(body_parser_1.default.json());
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,  csrf-token, LinkedIn-Cookie, Content-Type, Accept, pragma, cache-control");
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Credentials", '*');
        next();
    });
    app.options("/*", function (req, res) {
        res.send();
    });
}
const loggingMiddleware = (req, res, next) => {
    if (req.originalUrl.includes('/login')) {
        next();
    }
    else {
        console.log(req.headers);
        if (!req.headers.authorization) {
            return res.status(401).send('Invalid Token');
        }
        jsonwebtoken_1.default.verify(req.headers.authorization, 'secretKey', function (err, decoded) {
            if (err) {
                return res.status(401).send('Invalid Token');
            }
        });
        next();
    }
};
process.on("uncaughtException", (err) => {
    console.log(err);
    process.exit(1);
});
process.on("unhandledRejection", (err) => {
    console.log(err);
});
configureMiddleWare();
app.use(loggingMiddleware);
ApiRouting_1.ApiRouting.Register(app);
app.use((err, req, res, next) => {
    if (err)
        res.status(500).send({ message: err.message || err });
});
app.listen(port);
console.log(`Server running at http://localhost:${port}/`);
//# sourceMappingURL=server.js.map