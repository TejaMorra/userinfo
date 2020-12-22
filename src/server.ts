import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { ApiRouting } from "./ApiRouting";
import { sequelize } from './config/sequelize';
import jwt from 'jsonwebtoken';

sequelize.setConnection();

 
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const corsOption = {
  credentials: true,
  exposedHeaders: ["x-auth-token"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: true,
};

function configureMiddleWare() {
  app.use(cors(corsOption)); 
  app.use(bodyParser.json());

  
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,  csrf-token, LinkedIn-Cookie, Content-Type, Accept, pragma, cache-control"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS"
  );
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
  } else {
    console.log(req.headers)
  if (!req.headers.authorization) {
    return res.status(401).send('Invalid Token')
  }
  jwt.verify(req.headers.authorization, 'secretKey', function(err, decoded) {
    if (err) {
      return res.status(401).send('Invalid Token')
    }
  });
  next();
}
}

process.on("uncaughtException", (err) => {
  console.log(err)
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(err)
});
configureMiddleWare();
app.use(loggingMiddleware);

ApiRouting.Register(app);

app.use((err, req, res, next) => {
  if (err)
  res.status(500).send({ message: err.message || err });
});

app.listen(port);
console.log(`Server running at http://localhost:${port}/`);
