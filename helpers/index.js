import { ResponseOperators } from "~/operators";
import _ from "lodash";
import {Environment} from "~/env/Environment";

export class Helpers {
  response;

  constructor(operator) {
    this.response = operator.arkResponse();
  }

  isNotNullOrUndifined(value) {
    return !!(_.isUndefined(value) || _.isNull(value));
  }

  isNotNullOrUndifinedOrEmpty(value) {
    return !!(_.isUndefined(value) || _.isNull(value) || value === "");
  }
}

export class HelpersFactory {
  tools;

  constructor(response) {
    this.tools = new Helpers(new ResponseOperators(response));
  }

  verifyResponse() {
    const response = this.tools.response;
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
