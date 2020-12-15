import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
import { SqlManager} from '../../config/sql.manager';
import {users} from '../../config/query'

export class UserManager {

  public getUsers = async () => {
    try {
      const sqlManager = new SqlManager();
      const userList = await sqlManager.Get(users.getUsers);
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
  

public loginUser = async (reqData) => {
  try {
    var token = jwt.sign({ id: v4() }, 'secretKey', {
      expiresIn: 86400 // expires in 24 hours
    });
    console.log(token)
    return {token}
  } catch (error) {
    throw error;
  }
}
}
