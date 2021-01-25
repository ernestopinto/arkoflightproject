export class Environment {
  static API_ERRORS = {
    simple: 1,
    calculations: 2,
    critical: 3,
  };

  static IMAGES_SIZE = {
    thumb: 0,
    full: 1,
  };

  static OP_CODES = {
    ready: 0,
    refresh: 1,
    reFetchData: 2,
  };

  static CRUD_CODES = {
    create: 0,
    insert: 1,
    update: 2,
    delete: 3,
  };

  static COMPONENT_CODES = {
    default: 0,
    playground_arkImage: 1,
    send_images: 2,
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
    getImageByCode: "img",
    getImages: "imgs",
  };
}
