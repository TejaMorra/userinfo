import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { ApiRouting } from "./ApiRouting";
import { sequelize } from './config/sequelize';

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
}

configureMiddleWare();

ApiRouting.Register(app);

app.use((err, req, res, next) => {});

app.listen(port);
console.log(`Server running at http://localhost:${port}/`);
