import {_} from "lodash";
import {pluck} from "rxjs/operators";

export class ResponseOperators {

    _response;

    // response is a stream or not
    constructor(response) {
        this._response = response;
    }

    arkResponse(){
        return this._response.data
    }

    pluckStream(prop){
        return {
            result: pluck(prop)
        }
    }

}