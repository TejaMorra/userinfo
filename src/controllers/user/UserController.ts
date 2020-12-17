import { response, Router } from "express";
import joi from 'joi'

import { UserManager } from "../../managers/user/UserManager";

export class UserController {
  public static route = "/api";
  private userManager: UserManager;
  public router: Router;

  constructor() {
    this.router = Router();
    this.userManager = new UserManager();

    this.init();
  }

  private init() {
    this.router.post('/user/login', this.loginUser);
    this.router.post("/user", this.getUsers);
    this.router.get("/user/:id", this.getUser);
    this.router.post("/user/create", this.addUser);
    this.router.put("/user/:id", this.updateUser);
    this.router.delete("/user/:id", this.deleteUser);

    // Product
    
    this.router.post("/product", this.getProducts);
    this.router.get("/product/:id", this.getProduct);
    this.router.post("/product/create", this.addProduct);
    this.router.put("/product/:id", this.updateProduct);
    this.router.delete("/product/:id", this.deleteProduct);
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
      const result = await this.userManager.getUsers(request.body);
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

  // Products

  private deleteProduct = async (request, response, next) => {
    try {
      const result = await this.userManager.deleteProduct(request.params);
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  }

  private updateProduct = async (request, response, next) => {
    try {
      const result = await this.userManager.updateProduct({...request.params, ...request.body});
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };
  private getProducts = async (request, response, next) => {
    try {
      const result = await this.userManager.getProducts(request.body);
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };

  private getProduct = async (req, response, next) => {
    try {
      const result = await this.userManager.getProduct(req.params);
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };

  private addProduct = async (req, response, next) => {
    try {
      const schema  = joi.object({
        name: joi.string().required(),
        price: joi.number().required(),
        description: joi.string(),
        currency: joi.string().required(),
      })
      const data = schema.validate(req.body);
      if (data.error) {
        next(data.error);
      }
      const result = await this.userManager.addProduct(req.body);
      response.status(200).send(result);
    } catch (error) {
      next(error)
    }
  };
}
