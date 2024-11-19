export class Common {
  constructor() {
    //TODO : Do initialization as required
  }
  generateError(methodName, error) {
    console.log("AppWrite service ::" + { methodName } + ":: error => ", error);
    throw error;
  }
}

const common = new Common();

export default common;
