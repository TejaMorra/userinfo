import * as express from "express";
import { UserController } from "./controllers";

export class ApiRouting {
  public static Register(app: express.Express) {
    app.use(UserController.route, new UserController().router);
  }
}
