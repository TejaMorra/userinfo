import { response, Router } from "express";
import joi from 'joi'

import { UserManager } from "../../managers/user/UserManager";

export class UserController {
  public static route = "/api/user";
  private userManager: UserManager;
  public router: Router;

  constructor() {
    this.router = Router();
    this.userManager = new UserManager();

    this.init();
  }

  private init() {
    this.router.post('/login', this.loginUser);
    this.router.get("/", this.getUsers);
    this.router.get("/:id", this.getUser);
    this.router.post("/", this.addUser);
    this.router.put("/:id", this.updateUser);
    this.router.delete("/:id", this.deleteUser);
  }

  private loginUser = async (request, response, next) => {
    try {
      const result = await this.userManager.loginUser(request.params);
      response.statusCode = 200;
      response.json(result);
    } catch (error) {
      next(error);
    }
  }

  private deleteUser = async (request, response, next) => {
    try {
      const result = await this.userManager.deleteUser(request.params);
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  }

  private updateUser = async (request, response, next) => {
    try {
      const result = await this.userManager.updateUser({...request.params, ...request.body});
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };
  private getUsers = async (request, response, next) => {
    try {
      const result = await this.userManager.getUsers();
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };

  private getUser = async (req, response, next) => {
    try {
      const result = await this.userManager.getUser(req.params);
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };

  private addUser = async (req, response, next) => {
    try {
      const schema  = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string(),
        role: joi.string().required(),
        country: joi.string().required(),
      })
      const data = schema.validate(req.body);
      if (data.error) {
        next(data.error);
      }
      const result = await this.userManager.addUser(req.body);
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };
}
