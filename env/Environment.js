export class Environment {
  static API_ERRORS = {
    simple: 1,
    calculations: 2,
    critical: 3,
  };
}

export class ApiEndPoints {
  static getApiEndPoint(ep) {
    return `${ApiEndPoints.base}/${ep}`;
  }

  // BASE API URL

  static base = process.env.API_URL;

  static endpoints = {
    imageThumb: "it",
    imageFull: "if",
    apiInfo: "apiinfo",
    registerUser: "register",
    userInfo: "user",
    sendImage: "sendImage",
    getImageByCode: "img"
  };
}
