import config from "../config/config";
import { Client, Account, ID } from "appwrite";
import common from "../common";

export class AuthService {
  client;
  account;

  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //As account is successfully created just login the user so they do not have to login again
        return await this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      common.generateError(arguments.callee.name);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      common.generateError(arguments.callee.name);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      common.generateError(arguments.callee.name);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      common.generateError(arguments.callee.name);
    }
  }
}

const authService = new AuthService();

export default authService;
