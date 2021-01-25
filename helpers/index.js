import { ResponseOperators } from "~/operators";
import _ from "lodash";
import {Environment} from "~/env/Environment";

export class Helpers {
  response;

  static isNotNullOrUndifined(value) {
    return (value !== undefined && value !== null)
  }

  static isNotNullOrUndifinedOrEmpty(value) {
    return (value !== '' && value !== undefined && value !== null)
  }

  static getHashSlug($route){
    return $route.hash.split("#/")[1]
  }

  static displayErrors(errors){
    let out = '';
    for (let s of errors){
      out += s + '\r';
    }
    return out;
  }

}

export class HelpersFactory {

  tools;

  constructor(response) {
    this.tools = new Helpers(new ResponseOperators(response));
  }

  static verifyResponse() {
    const response = this.tools._response;
    if (
      response.error !== Environment.API_ERRORS.simple &&
      this.tools.isNotNullOrUndifined(response)
    ) {
      return response;
    } else {
      const displayErrors = () => {
        let out = '';
        for (let s of response.data.errors){
          out += s + '\r';
        }
        return out;
      }
      return displayErrors();
    }
  }
}
