import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";
import common from "../common";

export class Service {
  client;
  databases;
  bucket;

  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      //First check if there are any image. If image then need to upload image first
      //and then need to use that ID under createDocument featuredImage
      const id = await this.uploadFile(featuredImage);

      return await this.databases.createDocument(
        this.config.appwriteDatabaseId,
        this.config.appwriteCollectionId,
        slug,
        { title, content, id, status, userId }
      );
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        this.config.appwriteDatabaseId,
        this.config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.deleteDocument(
        this.config.appwriteDatabaseId,
        this.config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }

  async getDocument(slug) {
    try {
      return await this.databases.getDocument(
        this.config.appwriteDatabaseId,
        this.config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        this.config.appwriteDatabaseId,
        this.config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }

  //File upload services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        this.config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(this.config.appwriteBucketId, fileId);
    } catch (error) {
      common.generateError(getMyName(), error);
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(this.config.appwriteBucketId, fileId);
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

const service = new Service();

export default service;
