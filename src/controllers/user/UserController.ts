import { response, Router } from "express";

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
    this.router.get("/", this.getUsers);
    this.router.get("/:id", this.getUser);
    this.router.post("/", this.addUser);
    this.router.put("/:id", this.updateUser);
    this.router.delete("/:id", this.deleteUser);
  }

  private deleteUser = async (request, response, next) => {
    try {
      const result = await this.userManager.deleteUser(request.params);
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send({ message: error.message || error });
    }
  }

  private updateUser = async (request, response, next) => {
    try {
      const result = await this.userManager.updateUser({...request.params, ...request.body});
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send({ message: error.message || error });
    }
  };
  private getUsers = async (request, response, next) => {
    try {
      const result = await this.userManager.getUsers();
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send({ message: error.message || error });
    }
  };

  private getUser = async (req, response, next) => {
    try {
      const result = await this.userManager.getUser(req.params);
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send({ message: error.message || error });
    }
  };

  private addUser = async (req, response, next) => {
    try {
      const result = await this.userManager.addUser(req.body);
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send({ message: error.message || error });
    }
  };
}
