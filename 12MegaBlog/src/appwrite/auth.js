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
    console.log("Account Details :", this.account);
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
      common.generateError(getMyName(), error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account
        .get()
        .then((res) => console.log("Logged in User : ", res));
    } catch (error) {
      common.generateError("getCurrentUser", error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }
}

//Function will return the current method name in which it is being called
function getMyName() {
  var e = new Error("dummy");
  var stack = e.stack
    .split("\n")[2]
    // " at functionName ( ..." => "functionName"
    .replace(/^\s+at\s+(.+?)\s.+/g, "$1");
  return stack;
}

const authService = new AuthService();

export default authService;
