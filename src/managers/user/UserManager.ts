import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
import { SqlManager} from '../../config/sql.manager';
import {users, products} from '../../config/query'

export class UserManager {

  public getUsers = async (requestData) => {
    try {
      if (!requestData.limit) {
        requestData.limit = 10;
      }
      if (!requestData.offset) {
        requestData.offset = 0;
      }
      const sqlManager = new SqlManager();
      const userList = await sqlManager.Get(users.getUsers, requestData);
      return userList;
    } catch (error) {
      throw error;
    }
  };

  public getUser = async (requestData) => {
    try {
      const sqlManager = new SqlManager();
      return sqlManager.Get(users.getUser, {id: requestData.id});
    } catch (error) {
      throw error;
    }
  };

  public updateUser = async (requestData) => {
    try {
      const sqlManager = new SqlManager();
      return sqlManager.Update(users.updateUser, requestData);
    } catch (error) {
      throw error;
    }
  }
  public addUser = async (reqData) => {
    try {
      const sqlManager = new SqlManager();
      const resp = await sqlManager.Insert(users.insertUser, reqData);
      return reqData;
    } catch (error) {
      throw error;
    }
  };

  public deleteUser = async (reqData) => {
    try {
      const sqlManager = new SqlManager();
      const resp = await sqlManager.Delete(users.deleteUser, reqData);
      return reqData;
    } catch (error) {
      throw error;
    }
  }

  // Products

  public getProducts = async (requestData) => {
    try {
      if (!requestData.limit) {
        requestData.limit = 10;
      }
      if (!requestData.offset) {
        requestData.offset = 0;
      }
      const sqlManager = new SqlManager();
      const productsList = await sqlManager.Get(products.getProducts, requestData);
      return productsList;
    } catch (error) {
      throw error;
    }
  };

  public getProduct = async (requestData) => {
    try {
      const sqlManager = new SqlManager();
      return sqlManager.Get(products.getProduct, {id: requestData.id});
    } catch (error) {
      throw error;
    }
  };

  public updateProduct = async (requestData) => {
    try {
      const sqlManager = new SqlManager();
      return sqlManager.Update(products.updateProduct, requestData);
    } catch (error) {
      throw error;
    }
  }
  public addProduct = async (reqData) => {
    try {
      const sqlManager = new SqlManager();
      const resp = await sqlManager.Insert(products.insertProduct, reqData);
      return reqData;
    } catch (error) {
      throw error;
    }
  };

  public deleteProduct = async (reqData) => {
    try {
      const sqlManager = new SqlManager();
      const resp = await sqlManager.Delete(products.deleteProduct, reqData);
      return reqData;
    } catch (error) {
      throw error;
    }
  }
  

public loginUser = async (reqData) => {
  try {
    var token = jwt.sign({ id: v4() }, 'secretKey', {
      expiresIn: 86400 // expires in 24 hours
    });
    return {token}
  } catch (error) {
    throw error;
  }
}
}
